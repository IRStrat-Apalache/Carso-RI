import os
import logging
import requests

from wsgiref.util import FileWrapper

from Crypto import Random
from django.core.mail import send_mail, EmailMultiAlternatives
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render
from django.template import loader
from django.template.loader import render_to_string
from django.utils.translation import gettext_lazy as _
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.gzip import gzip_page
from django.views.decorators.http import require_POST
import json
from frontend.forms import NewsletterForm, AlertEmailForm, DenunciaForm
from rieduca import settings
from .forms import ContactForm, ContactFormExp
from django.views import generic
from django.utils import translation


from .models import ContenidoDestacado




class DatosView(generic.ListView):
    def get_directivo_principal_es_data():
        locale = translation.get_language()
        if locale == 'es':
            file_path = 'frontend/static/datos/directivos.json'
        else:
            file_path = 'frontend/static/datos/directivos-en.json'

        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)
        directivos_principales_es_list = data[0]
        return directivos_principales_es_list

    def get_directivo_resto_es_data():
        locale = translation.get_language()
        if locale == 'es':
            file_path = 'frontend/static/datos/directivos.json'
        else:
            file_path = 'frontend/static/datos/directivos-en.json'

        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)
        directivos_r_es_list = data[1]
        return directivos_r_es_list

    def get_directivo_all_es_data():
        locale = translation.get_language()
        if locale == 'es':
            file_path = 'frontend/static/datos/directivos.json'
        else:
            file_path = 'frontend/static/datos/directivos-en.json'

        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)
        directivos_list = data[0]['principales'] + data[1]['resto']
        return directivos_list


class EventosView(generic.ListView):
    @staticmethod
    def get_event_es_data():
        eventsESList = [
            {
                "title": "Fibra Educa presenta una solicitud de actualización de la primera inscripción en el RNV derivado de una oferta pública primaria subsecuente de CBFIS en México y oferta primaria privada internacional.",
                "date": "2025-06-03",
                "url": "https://www.bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1469924_3277_1.zip"
            },
            {
                "title": "Anticipo a cuenta de la distribución del resultado fiscal por el ejercicio que terminará el 31 de diciembre de 2025 y reembolso de patrimonio.",
                "date": "2025-05-15",
                "url": "https://www.bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1465606_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 10,332 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería.",
                "date": "2025-05-09",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1464366_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Invitación a la conferencia telefónica de los resultados del primer trimestre del 2025.",
                "date": "2025-05-08",
                "url": "https://bmv.com.mx/docs-pub/eventfid/eventfid_1464050_3277_2007-01_1.pdf"
            },
            {
                "title": "Reporte Anual por el ejerficio que terminó el 31 de diciembre de 2024.",
                "date": "2025-05-15",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1461023_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Resultados no auditados del primer trimestre de 2025",
                "date": "2025-04-30",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1461020_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Pago en efectivo de la liquidación de la distribución del resultado fiscal por el ejercicio que terminó el 31 de diciembre de 2024 y reembolso de patrimonio.",
                "date": "2025-03-05",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1446980_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Interposición de medios de defensa ante la determinación de un crédito fiscal a cargo de la emisora.",
                "date": "2025-03-05",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1446778_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Invitación a la conferencia telefónica de los resultados del Cuarto Trimestre Preliminar (No Auditados) del 2024.",
                "date": "2025-03-03",
                "url": "https://bmv.com.mx/docs-pub/eventfid/eventfid_1445919_3277_2007-01_1.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 11,124 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería.",
                "date": "2025-02-28",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1445621_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Resultados del Cuarto Trimestre Preliminar (No Auditados) 2024.",
                "date": "2025-02-27",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1445096_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Resultados del Cuarto Trimestre Preliminar (No Auditados) 2024.",
                "date": "2025-02-27",
                "url": "https://bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1445096_3277_2007-01_1.zip#/visorXbrl"
            },
            {
                "title": "Fibra Educa anuncia el cumplimiento de las condiciones suspensivas para poder adquirir, previas autorizaciones gubernamentales, la segunda y última fase de un portafolio inmobiliario.",
                "date": "2024-11-22",
                "url": "https://www.bmv.com.mx/docs-pub/visor/visorXbrl.html?docins=../eventfid/eventfid_1421379_3277_1.zip#/visorXbrl"
            },
            {
                "title": "Invitación a la conferencia telefónica de los resultados del Tercer Trimestre de 2024",
                "date": "2024-11-04",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_04_11_2024.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 9,900 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) Actualmente en tesorería",
                "date": "2024-11-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_11_2024.pdf"
            },
            {
                "title": "Resultados del Tercer Trimestre 2024",
                "date": "2024-10-29",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_29_10_2024.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Cuarto Trimestre 2019",
                "date": "2020-02-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_02_2020.pdf"
            },
            {
                "title": "Resultados del Cuarto Trimestre de 2021",
                "date": "2022-02-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_02_2022.pdf"
            },
            {
                "title": "Pago en efectivo de la liquidación de la distribución del resultado fiscal del ejercicio 2023 y reembolso de patrimonio correspondiente a las operaciones del cuarto trimestre 2023",
                "date": "2024-02-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_02_2024.pdf"
            },
            {
                "title": "Informe Anual de Sostenibilidad y aseguramiento limitado por el año que terminó el 31 de Diciembre de 2023",
                "date": "2024-06-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_06_2024.pdf"
            },
            {
                "title": "Resultados del Segundo Trimestre de 2022",
                "date": "2022-07-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_07_2022.pdf"
            },
            {
                "title": "Resultados del Segundo Trimestre de 2023",
                "date": "2023-07-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_07_2023.pdf"
            },
            {
                "title": "Resultados del Tercer Trimestre de 2021",
                "date": "2021-10-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_10_2021.pdf"
            },
            {
                "title": "Resultados del Tercer Trimestre de 2023",
                "date": "2022-10-28",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_28_10_2022.pdf"
            },
            {
                "title": "Reporte Anual del ejercicio que terminó el 31 de Diciembre de 2021",
                "date": "2022-04-29",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_29_04_2022.pdf"
            },
            {
                "title": "Resultados del Primer Trimestre de 2022",
                "date": "2022-04-29",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_29_04_2022_2.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 13,744 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2019-10-29",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_29_10_2019.pdf"
            },
            {
                "title": "Resultados del Tercer Trimestre de 2020",
                "date": "2020-10-29",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_29_10_2020.pdf"
            },
            {
                "title": "Pago de distribución en efectivo, por las operaciones del Tercer Trimestre 2021",
                "date": "2021-10-29",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_29_10_2021.pdf"
            },
            {
                "title": "Resultados del Primer Trimestre de 2020",
                "date": "2020-04-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_04_2020.pdf"
            },
            {
                "title": "Reporte Anual del ejercicio de 2019",
                "date": "2020-04-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_04_2020-2.pdf"
            },
            {
                "title": "Resultados del Primer Trimestre de 2021",
                "date": "2021-04-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_04_2021.pdf"
            },
            {
                "title": "Primer Informe de Sostenibilidad 2020",
                "date": "2021-04-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_04_2021_2.pdf"
            },
            {
                "title": "Reporte anual ejercicio 2020",
                "date": "2021-04-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_04_2021_3.pdf"
            },
            {
                "title": "Reporte Anual por el ejercicio que terminó el 31 de diciembre 2023",
                "date": "2024-04-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_04_2024.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2020-07-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_07_2020.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Tercer Trimestre 2019",
                "date": "2019-10-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_10_2019.pdf"
            },
            {
                "title": "Fibra Educa anuncia la designación del Director de Auditoría Interna y la reestructura de su área de expansión de Fibra Educa Management, S.C.",
                "date": "2019-10-30",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_30_10_2019-2.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Segundo Trimestre 2020",
                "date": "2020-07-31",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_31_07_2020.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Tercer Trimestre 2023",
                "date": "2023-10-31",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_31_10_2023.pdf"
            },
            {
                "title": "Fibra Educa anuncia la disposición del crédito simple contratado para la adquisición de un activo para su cartera",
                "date": "2022-05-20",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_20_05_2022.pdf"
            },
            {
                "title": "Informe Anual de Sustentabilidad 2021",
                "date": "2022-06-20",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_20_06_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 5,409 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2022-07-20",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_20_07_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 10,304 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2020-10-20",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_20_10_2020.pdf"
            },
            {
                "title": "Cumplimiento de los dos KPIs relativos a principios ASG",
                "date": "2023-03-21",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_21_03_2023.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 5,608 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2022-10-21",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_21_10_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 10,276 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2021-04-22",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_22_04_2021.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 9,516 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2024-04-22",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_22_04_2024.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo perteneciente al sector educativo para su cartera ubicado en el estado de Veracruz, Veracruz",
                "date": "2023-11-22",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_22_11_2023.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2021-02-23",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_23_02_2021.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo para su cartera en el estado de Aguascalientes",
                "date": "2022-06-23",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_23_06_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 8,608 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2021-07-23",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_23_07_2021.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 19,451 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2022-02-24",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_24_02_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 27,644 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2023-02-24",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_24_02_2023.pdf"
            },
            {
                "title": "Pago en distribución en efectivo, por las operaciones del Segundo Trimestre 2022",
                "date": "2022-07-25",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_25_07_2022.pdf"
            },
            {
                "title": "HR Ratings ratificó la calificación de HR AAA con Perspectiva Estable para las emisiones EDUCA 23L, EDUCA 23-2L y EDUCA 23UL de Fibra Educa, tras su reapertura de libro por un monto total de hasta P$4,260m",
                "date": "2023-09-25",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_25_09_2023.pdf"
            },
            {
                "title": "Pago en efectivo de la distribución del resultado fiscal y reembolso de patrimonio, por las operaciones celebradas en el Tercer Trimestre 2022",
                "date": "2022-10-25",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_25_10_2022.pdf"
            },
            {
                "title": "Resultados del Cuarto Trimestre de 2019",
                "date": "2020-02-26",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_26_02_2020.pdf"
            },
            {
                "title": "Resultados del Primer Trimestre de 2024",
                "date": "2024-04-26",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_26_04_2024.pdf"
            },
            {
                "title": "Resultados del Segundo Trimestre de 2024",
                "date": "2024-07-26",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_26_07_2024.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2020-10-26",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_26_10_2020.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 7,488 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2021-10-26",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_26_10_2021.pdf"
            },
            {
                "title": "Resultados del Cuarto Trimestre de 2022",
                "date": "2023-02-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_02_2023.pdf"
            },
            {
                "title": "Anticipo de la distribución en efectivo, a cuenta del resultado fiscal del ejercicio 2022 y reembolso de patrimonio, correspondiente a las operaciones celebradas en el Cuarto Trimestre 2022",
                "date": "2023-02-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_02_2023_2.pdf"
            },
            {
                "title": "Resultados del Cuarto Trimestre preliminar 2023",
                "date": "2024-02-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_02_2024.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 5,944 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2022-04-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_04_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 10,492 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2020-07-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_07_2020.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2021-07-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_07_2021.pdf"
            },
            {
                "title": "Resultados del Segundo Trimestre de 2021",
                "date": "2021-07-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_07_2021_2.pdf"
            },
            {
                "title": "Desastre natural provocado por el huracán Otis en el estado de Guerrero",
                "date": "2023-10-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_10_2023.pdf"
            },
            {
                "title": "Resultados del Tercer Trimestre de 2023",
                "date": "2023-10-27",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_27_10_2023_2.pdf"
            },
            {
                "title": "Aviso con fines informativos",
                "date": "2019-12-11",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_11_12_2019.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 7,678 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2020-02-12",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_12_02_2020.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2020-02-13",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_13_02_2020.pdf"
            },
            {
                "title": "Fibra Educa anuncia confirmación de sus inquilinos sobre la continuidad del pago de las rentas de los inmuebles que conforman su patrimonio, con motivo de la emergencia sanitaria COVID-19",
                "date": "2020-04-13",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_13_04_2020.pdf"
            },
            {
                "title": "Pago en efectivo de un anticipo a cuenta de la distribución del resultado fiscal del ejercicio 2023 y el reembolso de patrimonio correspondiente a las operaciones del Tercer Trimestre 2023",
                "date": "2023-11-13",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_13_11_2023.pdf"
            },
            {
                "title": "Resoluciones de Asamblea Ordinaria de Tenedores: (I) Programa de colocación de CEBURES de hasta $20 MMDP y (II) Continuación del pilar social en materia de ASG",
                "date": "2023-03-14",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_14_03_2023.pdf"
            },
            {
                "title": "HR Ratings ratificó la calificación de HR AAA con Perspectiva Estable para las emisiones vigentes de Fibra Educa",
                "date": "2024-05-14",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_14_05_2024.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2019-11-14",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_14_11_2019.pdf"
            },
            {
                "title": "Inicio de operaciones del primer sistema fotovoltaico de Fibra Educa en su activo localizado en Culiacán, Sinaloa",
                "date": "2023-11-14",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_14_11_2023.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 2,256 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2022-02-15",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_15_02_2022.pdf"
            },
            {
                "title": "Pago en efectivo del anticipo de la distribución a cuenta del resultado fiscal del ejercicio 2024 y reembolso de patrimonio correspondiente a las operaciones del Primer Trimestre de ese mismo ejercicio",
                "date": "2024-05-15",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_15_05_2024.pdf"
            },
            {
                "title": "Fibra Educa anuncia la devolución del impuesto al valor agregado",
                "date": "2020-07-15",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_15_07_2020.pdf"
            },
            {
                "title": "Pago en efectivo de un anticipo a cuenta de la distribución del resultado fiscal del ejercicio 2024 y reembolso de patrimonio",
                "date": "2024-08-15",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_15_08_2024.pdf"
            },
            {
                "title": "Pago en efectivo de un anticipo a cuenta de la distribución del resultado fiscal del ejercicio 2023 y reembolso de patrimonio correspondiente a las operaciones del Segundo Trimestre 2023",
                "date": "2023-08-16",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_16_08_2023.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo perteneciente al sector educativo, para su cartera ubicado en Tlaquepaque Jalisco",
                "date": "2022-10-16",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_16_10_2022.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2020-04-17",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_17_04_2020.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 11,816 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2020-04-17",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_17_04_2020-2.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 11,565 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2021-02-18",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_18_02_2021.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 1,155 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2022-02-18",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_18_02_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 29,713 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2020-05-18",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_18_05_2020.pdf"
            },
            {
                "title": "Colocación y liquidación de $3,739.8 millones con sus 3 primeras emisiones de deuda vinculada a la sostenibilidad",
                "date": "2023-08-18",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_18_08_2023.pdf"
            },
            {
                "title": "Publicación del cuestionario de sostenibilidad aplicado por AMAFORE correspondiente al ejercicio de 2023",
                "date": "2024-09-18",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_18_09_2024.pdf"
            },
            {
                "title": "Fibra Educa precisa el desglose y pago de I.V.A. por los inmuebles adquiridos en la ciudad de San Luis Potosí, S.L.P. para su cartera",
                "date": "2019-12-18",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_18_12_2019.pdf"
            },
            {
                "title": "Invitación a Conferencia Telefónica - Resultados del Tercer Trimestre de 2019",
                "date": "2019-12-18",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_18_12_2019-2.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 25,974 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2021-02-19",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_19_02_2021.pdf"
            },
            {
                "title": "Fe de Erratas Evento Relevante de la Emisora",
                "date": "2019-12-19",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_19_12_2019.pdf"
            },
            {
                "title": "Movimientos inusuales de operación de los CBFIs EDUCA 18",
                "date": "2020-12-19",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_19_12_2020.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 6,964 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2023-04-20",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_20_04_2023.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Tercer Trimestre 2022",
                "date": "2022-11-04",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_04_11_2022.pdf"
            },
            {
                "title": "Movimientos inusuales en el precio de cotización de los CBFIs EDUCA 18",
                "date": "2022-01-05",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_05_01_2022.pdf"
            },
            {
                "title": "Invitación a Conferencia Telefónica Resultados del Cuarto Trimestre 2020",
                "date": "2021-03-05",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_05_03_2021.pdf"
            },
            {
                "title": "Resultados del Primer Trimestre de 2023",
                "date": "2023-03-05",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_05_03_2023-2.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Primer Trimestre 2023",
                "date": "2023-05-05",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_05_05_2023.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Cuarto Trimestre 2022",
                "date": "2023-03-06",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_06_03_2023.pdf"
            },
            {
                "title": "Resultados Dictaminados del ejercicio 2020 y Primer Trimestre 2021",
                "date": "2021-05-06",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_06_05_2021.pdf"
            },
            {
                "title": "Resultados del Primer Trimestre 2022",
                "date": "2022-05-06",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_06_05_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 9,306 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2023-11-07",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_07_11_2023.pdf"
            },
            {
                "title": "Movimientos inusuales de operación de los CBFIs EDUCA 18",
                "date": "2020-12-07",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_07_12_2020.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados Dictaminados del ejericio 2019 del Primer Trimestre 2020",
                "date": "2020-05-08",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_08_05_2020.pdf"
            },
            {
                "title": "Pago de la distribución en efectivo de un anticipo a cuenta del resultado fiscal del ejercicio 2023 y reembolso del patrimonio, correspondiente a las operaciones celebradas en el Primer Trimestre 2023",
                "date": "2023-05-08",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_08_05_2023.pdf"
            },
            {
                "title": "HR Ratings asignó la calificación de HR AAA con Perspectiva Estable para las emisiones EDUCA 23L, EDUCA 23-2L y EDUCA 23UL",
                "date": "2023-06-08",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_08_06_2023.pdf"
            },
            {
                "title": "Adquisición de cinco activos pertenecientes al sector educativo con un ABR Total de 45,121 metros cuadrados ubicados en distintas partes del país",
                "date": "2024-08-08",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_08_08_2024.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo para su cartera en Hermosillo, Sonora",
                "date": "2022-02-09",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_09_02_2022.pdf"
            },
            {
                "title": "Informe Anual de Sustentabilidad 2022",
                "date": "2023-05-09",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_09_05_2023.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo perteneciente al sector educativo para su cartera ubicado en Toluca, Estado de México",
                "date": "2024-05-09",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_09_05_2024.pdf"
            },
            {
                "title": "Segundo Reporte Trimestral 2023, en atención a lo solicitado por la CNBV",
                "date": "2023-08-09",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_09_08_2023.pdf"
            },
            {
                "title": "Movimientos inusuales de operación de los CBFIs EDUCA 18",
                "date": "2020-12-09",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_09_12_2020.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 4,245 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2020-02-10",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_10_02_2020.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo para su cartera en Culiacán, Sinaloa",
                "date": "2022-02-10",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_10_02_2022.pdf"
            },
            {
                "title": "HR Ratings ratificó la calificación de HR AAA con Perspectiva Estable para las emisiones EDUCA 23L, EDUCA 23-2L y EDUCA 23UL de Fibra Educa",
                "date": "2023-11-10",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_10_11_2023.pdf"
            },
            {
                "title": "Colocación de $3,983 millones  con la reapertura de emisiones de deuda vinculada a la Sostenibilidad",
                "date": "2023-12-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_12_2023.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Cuarto Trimestre 2022",
                "date": "2023-03-02",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_02_03_2023.pdf"
            },
            {
                "title": "Reporte Anual por el ejercicio que terminó el 31 de Diciembre de 2022",
                "date": "2023-05-02",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_02_05_2023.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Segundo Trimestre 2021",
                "date": "2021-08-02",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_02_08_2021.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 15,820 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2023-08-02",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_02_08_2023.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Segundo Trimestre 2024",
                "date": "2024-08-02",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_02_08_2024.pdf"
            },
            {
                "title": "Vinculación a la sostenibilidad del primer crédito sindicado contratado por Fibra Educa",
                "date": "2022-12-02",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_02_12_2022.pdf"
            },
            {
                "title": "Conferencia Telefónica Resultados del Cuarto Trimestre 2021",
                "date": "2022-03-03",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_03_03_2022.pdf"
            },
            {
                "title": "Pago de distribución en efectivo",
                "date": "2021-05-03",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_03_05_2021.pdf"
            },
            {
                "title": "Reestructura de nuestro Gobierno Corporativo con equidad de género",
                "date": "2023-05-03",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_03_05_2023.pdf"
            },
            {
                "title": "Invitación a la Conferencia Telefónica de los resultados del Primer Trimestre del 2024 y Reporte Anual 2023",
                "date": "2024-05-03",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_03_05_2024.pdf"
            },
            {
                "title": "Invitación a la Conferencia Telefónica de los Resultados del Segundo Trimestre del 2023",
                "date": "2023-08-03",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_03_08_2023.pdf"
            },
            {
                "title": "Invitación a la Conferencia Telefónica de los Resultados del Tercer Trimestre del 2020",
                "date": "2020-11-03",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_03_11_2020.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo para su cartera en la ciudad de San Luis Potosí, S.L.P.",
                "date": "2019-12-03",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_03_12_2019.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de dos activos para su cartera en las ciudades de Torreón y Tijuana",
                "date": "2022-02-04",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_04_02_2022.pdf"
            },
            {
                "title": "Pago de distribución en efectivo, por las oepraciones del Primer Trimestre 2022",
                "date": "2022-05-04",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_04_05_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia la compra de un activo para su cartera en la ciudad de San Luis Potosí, S.L.P.",
                "date": "2019-11-04",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_04_11_2019.pdf"
            },
            {
                "title": "Resultados del Cuarto Trimestre 2020",
                "date": "2021-03-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_03_2021.pdf"
            },
            {
                "title": "Pago de distribución en efectivo, por las operaciones del Cuarto Trimestre 2021",
                "date": "2022-03-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_03_2022.pdf"
            },
            {
                "title": "Invitación a la Conferencia Telefónica de los Resultados del Cuarto Trimestre Preliminar del 2023",
                "date": "2024-03-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_03_2024.pdf"
            },
            {
                "title": "Fibra Educa anuncia la firma de un crédito simple para la adquisición de un activo para su cartera",
                "date": "2022-04-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_04_2022.pdf"
            },
            {
                "title": "Invitación a la Conferencia Telefónica de los Resultados del Segundo Trimestre del 2022",
                "date": "2022-08-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_08_2022.pdf"
            },
            {
                "title": "Fibra Educa anuncia el proceso de puesta en circulación de 10,764 Certificados Bursátiles Fiduciarios Inmobiliarios (CBFIS) actualmente en tesorería",
                "date": "2023-08-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_08_2023.pdf"
            },
            {
                "title": "Invitación a la Conferencia Telefónica de los Resultados del Tercer Trimestre del 2021",
                "date": "2021-11-01",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_01_11_2021.pdf"
            },
            {
                "title": "Pago en efectivo de un anticipo a cuenta de la distribución del resultado fiscal del ejercicio 2024 y reembolso de patrimonio.",
                "date": "2024-11-13",
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/EventosRelevantes/Evento_Relevante_13_11_2024.pdf"
            }

        ]
        context = eventsESList
        data_sorted = sorted(eventsESList, key=lambda x: x['date'], reverse=True)
        return data_sorted


class ProspectosView(generic.ListView):
    staticmethod

    def get_prospecto_es_data():
        prospectoESList = [
            {
                "title": _("Prospecto Oferta Pública Inicial"),
                "description": _("Emisión inicial"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/prospecto.pdf"
            },
            {
                "title": _("Prospecto del Programa de Bono Vinculado a la Sostenibilidad"),
                "description": _("Emisión inicial"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/ProspectoBonovinculadoalasostenibilidad.pdf"
            },
            {
                "title": _("Suplemento 23-2L (Fijo)"),
                "description": _("Emisión inicial"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/Suplemento23-2L(Fijo).pdf"
            },
            {
                "title": _("Suplemento 23L (Flotante)"),
                "description": _("Emisión inicial"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/Suplemento23L(Flotante).pdf"
            },
            {
                "title": _("Suplemento 23L (Flotante)"),
                "description": _("Reapertura"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/Suplemento-Primera-Emision(Reapertura).pdf"
            },
            {
                "title": _("Suplemento 23UL (Real)"),
                "description": _("Emisión inicial"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/Suplemento23UL(Real).pdf"
            },
            {
                "title": _("Suplemento 23UL (Real)"),
                "description": _("Reapertura"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/Suplemento-Tercera-Emision(Reapertura).pdf"
            },
            {
                "title": _("Calificación Otorgada por Agencias Calificadoras"),
                "description": _("Emisión Inicial"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/CalificacionotorgadaporAgenciasCalificadoras-emision-inicial.pdf"
            },
            {
                "title": _("Calificación Otorgada por Agencias Calificadoras"),
                "description": _("Reapertura"),
                "url": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/Prospectos/Carta_FibraEduca_Reapertura1.pdf"
            },
        ]

        context = prospectoESList
        return prospectoESList


# @gzip_page
@gzip_page
def index(request):
    lang = request.LANGUAGE_CODE
    json_filename = 'noticias_eng.json' if lang == 'en' else 'noticias.json'
    file_path = os.path.join(settings.BASE_DIR, 'frontend', 'static', 'datos', json_filename)

    try:
        with open(file_path, encoding='utf-8') as f:
            noticias = json.load(f)
    except FileNotFoundError:
        noticias = []

    context = {
        'title_meta': _('Fondo de Fondos'),
        'description': _(''),
        'title': _('Inicio'),
        'noticias': noticias
    }

    return render(request, f'frontend/{lang}/index.html', context)


# @cache_page(60 * 15)
def aviso_privacidad(request):
    context = {
        'title_meta': _('Términos y condiciones de nuestro sitio web '),
        'description': _(
            'Conoce los términos, condiciones y política de manejo de datos personales de la página web de Fibra Inn. '),
        'title': _('Aviso de privacidad'),
        'image': 'images/background/Home2.png',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/aviso_privacidad.html', context)


# @cache_page(60 * 15)
def contacto(request):
    context = {
        'title_meta': _('Contacto | Fondo de Fondos'),
        'description': _('Contacto'),
        'title': _('Contacto'),
        'image': 'images/fondo3.png',
        'site_key': os.getenv('RECAPTCHA_SITE_KEY')
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/contacto.html', context)


def contacto_exp(request):
    context = {
        'title_meta': _('Contacto para Expansión'),
        'description': _('Contacto para Expansión'),
        'title': _('Expansión'),
        'image': 'images/Contacto-04.png',
        'site_key': os.getenv('RECAPTCHA_SITE_KEY')
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/contacto_exp.html', context)


def contacto_cap(request):
    context = {
        'title_meta': _('Contacto área de capital humano'),
        'description': _('Contacto área de capital humano'),
        'title': _('Contacto área de capital humano'),
        'image': 'images/Contacto-04.png',
        'site_key': os.getenv('RECAPTCHA_SITE_KEY')
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/contacto_cap.html', context)


def denuncia(request):
    context = {
        'title_meta': _('Línea de denuncia'),
        'description': _('Línea de denuncia'),
        'title': _('Línea de denuncia'),
        'image': 'images/Contacto-04.png',
        'site_key': os.getenv('RECAPTCHA_SITE_KEY')
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/denuncia.html', context)


# @cache_page(60 * 15)
def sustentabilidad(request):
    context = {
        'title_meta': _('Conoce nuestro compromiso con la sustentabilidad | Fibra Educa'),
        'description': _(
            'Fibra Inn cree firmemente en la sustentabilidad como parte integral de su negocio. Entra y conoce nuestra '),
        'page': 'esg',
        'title': _('ESG (Ambiental, Social y Gobernanza)'),
        'image': 'images/breadcrumbs/sustentabilidad.jpg',
        'subtitle1': _('Sustentabilidad, una estrategia permanente'),
        'subtitle2': _(
            'Fibra Inn cree firmemente en la sustentabilidad como parte integral de su estrategia de negocio y de su forma de operar, y es por ello que en 2019 inició formalmente con la implementación de su estrategia ASG<span class"d-block d-sm-none">.</span> <span class="d-none d-sm-block"> (Ambiental, Social y Gobernanza, o “ESG” por sus siglas en inglés) tomando en consideración los más altos criterios y lineamientos en la materia.</span>'),
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sustentabilidad.html', context)


def download(request, filename):
    path = settings.BASE_DIR + "/frontend/static/files/sustentabilidad/"
    full_path = path + filename
    f = open(full_path, "rb")
    response = HttpResponse(FileWrapper(f))
    response["Content-Length"] = os.path.getsize(full_path)
    response["Content-Disposition"] = "attachment;filename=" + filename
    return response


# @cache_page(60 * 15)
def inversionistas(request):
    context = {
        'title_meta': _('Información de interés para los inversionistas en Fibras | Fibra Educa'),
        'description': _(
            'Fibra Inn ha tenido resultados consistentes. Consulta aquí información sobre distribuciones en efectivo, resultados trimestrales y más.'),
        'title': _('Inversionistas'),
        'image': 'images/breadcrumbs/6.jpg',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/inversionistas.html', context)


def como_invertir(request):
    context = {
        'title_meta': _('Información de interés para los inversionistas en Fibras | Fibra Educa'),
        'description': _(
            'Fibra Inn ha tenido resultados consistentes. Consulta aquí información sobre distribuciones en efectivo, resultados trimestrales y más.'),
        'title': _('Inversionistas'),
        'image': 'images/header_n.png',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/como_invertir.html', context)


def reportes_financieros(request):
    reportes_financieros = requests.get(
        request._get_scheme() + '://' + request.get_host() + '/static/datos/reportes_financieros.json').json()

    # with open('frontend/static/datos/reportes_financieros.json', 'r') as f:
    #     reportes_financieros = json.load(f)
    # reports = reportes_financieros

    filter_param = request.GET.get('filter', '')

    context = {
        'title_meta': _('Mejora tu Inversión en Fibras | Eventos relevantes | Fibra Educa'),
        'description': _(
            'En Fibra Inn tenemos un fuerte compromiso con nuestros inversionistas. Entra y conoce los eventos más destacados sobre Inversión en Fibras. '),
        'title': _('Centro de reportes'),
        'image': 'images/background/educa_header_centro_de_reportes.png',
        'reportes_financieros': reportes_financieros,
        # 'eventosrelevantes_en': eventosrelevantes_en,
        'subtitle1': '',
        'subtitle2': ''
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/reportes_financieros.html', context)


# @require_POST
def search(request):
    # form = request.GET['q']
    # print(form['q'])
    context = {
        'term': request.GET['q'],
        'title': _('Resultados'),
        'title_meta': _('Resultados'),
        'image': 'images/breadcrumbs/1.jpg',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/resultados.html', context)


# Nosotros
# @cache_page(60 * 15)
def nosotros(request):
    directivos_principales = DatosView.get_directivo_principal_es_data()
    directivos_resto = DatosView.get_directivo_resto_es_data()
    directivos_all = DatosView.get_directivo_all_es_data()

    context = {
        'title_meta': _('Portafolio | Fondo de Fondos'),
        'description': _(''),
        'title': _('Portafolio'),
        'page': 'nosotros',   # <- este valor solo lo usas en la plantilla
        'image': 'images/fondo5.png',
        'directivos_principales': directivos_principales['principales'],
        'directivos_principales_count': len(directivos_principales['principales']),
        'directivos_resto': directivos_resto['resto'],
        'directivos_all': directivos_all,
        'site_key': os.getenv('RECAPTCHA_SITE_KEY')
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/nosotros/portafolio.html', context)



# End Nosotros

# Portafolio
# @cache_page(60 * 15)
def descripcion(request):
    context = {
        'title_meta': _('Descripción'),
        'description': _('ZXC'),
        'title': _('Descripción'),
        'image': 'images/breadcrumbs/1.jpg',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/portafolio/descripcion.html', context)


# @cache_page(60 * 15)
def propiedades(request):
    context = {
        'title_meta': _('PortafolioNosotros | Fondo de Fondos | Fondo de Fondos'),
        'page': 'propiedades',
        'description': _(
            'Conoce nuestro Portafolio de alta calidad. Inmuebles, ubicación, sector, industria y más. ¡Ingresa ahora!'),
        'title': _('Portafolio'),
        'image': 'images/background/porta.png',
        'subtitle2': _(''),
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/portafolio/propiedades.html', context)


# Financiera
# @cache_page(60 * 15)
# def fundamentales(request):
#     context = {
#         'title_meta': _('Estados financieros de nuestra compañía | Fibra Educa'),
#         'description': _(
#             'Conozca datos sobre nuestros resultados, situación financiera, rentabilidad, razones financieras e indicadores operativos en nuestro sitio web.'),
#         'title': _('Métricas'),
#         'image': 'images/background/educa_header_fundamentales.png',
#     }
#     return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/fundamentales.html', context)


# @cache_page(60 * 15)
def trimestrales(request):
    context = {
        'title_meta': _('Resultados trimestrales'),
        'description': _('Resultados trimestrales'),
        'title': _('Resultados trimestrales'),
        'image': 'images/breadcrumbs/1.jpg',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/trimestrales.html', context)


# @cache_page(60 * 15)
def anuales(request):
    context = {
        'h1_text': _('Inversión en Fibras - Reportes BMV'),
        'title_meta': _('Accede a los reportes financieros de Fibra Inn | Fibra Educa'),
        'description': _(
            'Accede a todos nuestros reportes en la Bolsa Mexicana de Valores desde el inicio de nuestras operaciones.'),
        'title': _('Reportes BMV'),
        'image': 'images/breadcrumbs/1.jpg',
        'subtitle1': _('Acceda a nuestros documentos financieros desde el inicio de nuestras operaciones.'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/anuales.html', context)


# @cache_page(60 * 15)
def presentaciones(request):
    context = {
        'title_meta': _('Conoce información única en nuestras presentaciones | Fibra Educa'),
        'description': _(
            'Encuentra archivos descargables de las presentaciones con información importante para proveedores, colaboradoradores y clientes de Fibra Inn  ¡Conoce más! '),
        'title': _('Presentaciones'),
        'image': 'images/breadcrumbs/5.jpg',
        'subtitle1': '',
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/presentaciones.html', context)


# @cache_page(60 * 15)
def eventos_relevantes(request):
    events2 = EventosView.get_event_es_data()
    context = {
        'title_meta': _('Mejora tu Inversión en Fibras | Eventos relevantes | Fibra Educa'),
        'description': _(
            'En Fibra Inn tenemos un fuerte compromiso con nuestros inversionistas. Entra y conoce los eventos más destacados sobre Inversión en Fibras. '),
        'title': _('Eventos relevantes'),
        'image': 'images/breadcrumbs/eventos.png',
        'events2': events2,
        'subtitle1': '',
        'subtitle2': _('Conozca de forma puntual los eventos más destacados de nuestra Fibra Educa.'),
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/eventos_relevantes.html', context)


# @cache_page(60 * 15)
def faqs(request):
    context = {
        'title_meta': _('Preguntas Frecuentes | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Preguntas frecuentes'),
        'image': 'images/background/educa_header_preguntas_frecuentes.png',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/faqs.html', context)


# Urls eliminadas
# @cache_page(60 * 15)
def glosario(request):
    context = {
        'title': _('Glosario'),
        'title_meta': _('Glosario'),
        'image': 'images/breadcrumbs/ImagenA.png',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/glosario.html', context)


def cobertura_analistas(request):
    context = {
        'title': _('Cobertura de Analistas'),
        'title_meta': _('Cobertura de analistas'),
        'image': 'images/breadcrumbs/header_cobertura.png',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/financiera/cobertura_analisis.html', context)


# End Financiera


# SOSTENIBILIDAD

# MODELO ASG

def modelo_asg(request):
    context = {
        'title_meta': _('Modelo Sostenible | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Nuestro modelo sostenible'),
        'image': 'images/breadcrumbs/asg.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/modelo_asg.html', context)


def medio_ambiente(request):
    context = {
        'title_meta': _('Medio Ambiente | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Medio Ambiente'),
        'image': 'images/breadcrumbs/amb.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/medio_ambiente.html', context)


def responsabilidad_social(request):
    context = {
        'title_meta': _('Responsabilidad social | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Responsabilidad social'),
        'image': 'images/breadcrumbs/resp.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/responsabilidad_social.html', context)


def gobernanza(request):
    context = {
        'title_meta': _('Gobernanza | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Gobernanza'),
        'image': 'images/breadcrumbs/gob.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/gobernanza.html', context)


def comunidad(request):
    context = {
        'title_meta': _('Vinculación con la comunidad | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Vinculación con la comunidad'),
        'image': 'images/breadcrumbs/com.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/comunidad.html', context)


def financiamiento(request):
    context = {
        'title_meta': _('Contenido Descargable | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Contenido Descargable'),
        'image': 'images/breadcrumbs/com.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/financiamiento.html', context)


def certificaciones(request):
    context = {
        'title_meta': _('Certificaciones | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Certificaciones sostenibles'),
        'image': 'images/breadcrumbs/certificacion.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/certificaciones.html', context)


def conducta(request):
    context = {
        'title_meta': _('Código de conducta | Fibra Educa'),
        'description': _(
            ''),
        'title': _('Código de conducta'),
        'image': 'images/breadcrumbs/conducta.png',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/sostenibilidad/conducta.html', context)


# Gobierno
# @cache_page(60 * 15)
def comites(request):
    context = {
        'title_meta': _('Gobierno Corporativo | Fibra Educa'),
        'description': _(
            'Conoce cómo están integrados los Comités de Fibra Educa y cuáles son sus funciones. Conservamos una estructura alineada con los intereses de nuestros inversionistas.'),
        'title': _('Gobierno corporativo'),
        'image': 'images/background/educa_header_gobierno_corporativo.png',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/comites.html', context)


# @cache_page(60 * 15)
def administracion_riesgos(request):
    context = {
        'title_meta': _('Fibra Educa'),
        'description': _(
            ''),
        'title': _('Administración de riesgos'),
        'image': 'images/breadcrumbs/ImagenC.png',
        'subtitle1': '',
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/administracion_riesgos.html', context)


# @cache_page(60 * 15)
def administrador(request):
    context = {
        'title_meta': _('Administrador de Propiedades | Fibra Educa'),
        'description': _(
            'Nuestro Administrador encarga de proponer, desarrollar y ejecutar estragias que aumente la rentabiildad de Fibra Inn. Conoce más sobre su metodología de trabajo aquí.'),
        'title': _('Administrador'),
        'image': 'images/breadcrumbs/1.jpg',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/administrador.html', context)


# @cache_page(60 * 15)
def auditor_externo(request):
    context = {
        'title_meta': _('Auditor Externo | Fibra Educa'),
        'description': _(
            'La Auditoría Externa de Fibra Inn es realizada por uno de las firmas de Auditoría más prestigiosa a nivel mundial. Más información aquí.'),
        'title': _('Auditor externo'),
        'image': 'images/breadcrumbs/1.jpg',
        'subtitle1': '',
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/auditor_externo.html', context)


# @cache_page(60 * 15)
def plan_compensacion(request):
    context = {
        'title_meta': _('Plan de compensación'),
        'title': _('Plan de compensación'),
        'image': 'images/breadcrumbs/1.jpg',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/plan_compensacion.html', context)


# @cache_page(60 * 15)
def asambleas_tenedores(request):
    asambleas_tenedores = requests.get(
        request._get_scheme() + '://' + request.get_host() + '/static/datos/asambleas_tenedores.json').json()

    asambleas_tenedores_en = requests.get(
        request._get_scheme() + '://' + request.get_host() + '/static/datos/asambleas_tenedores_en.json').json()

    context = {
        'title_meta': _('Asambleas de Tenedores | Fibra Educa'),
        'description': _(
            'Estas son las decisiones que se toman sobre la gestión de tus Fibras Inmobiliarias en Fibra Educa. Conoce nuestras asambleas y todos los reportes.'),
        'title': _('Asambleas de tenedores'),
        'image': 'images/breadcrumbs/1.jpg',
        'asambleas_tenedores': asambleas_tenedores,
        'asambleas_tenedores_en': asambleas_tenedores_en,
        'subtitle1': '',
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/gobierno/asambleas_tenedores.html', context)


# End Gobierno

# Bursatil
# @cache_page(60 * 15)
def acuerdos_asambleas(request):
    context = {
        'title': _('Acuerdos y Asambleas'),
        'title_meta': _('Acuerdos y Asambleas'),
        'image': 'images/breadcrumbs/1.jpg',

    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/acuerdos_asambleas.html', context)


# @cache_page(60 * 15)
def distribuciones(request):
    print(request.get_host())
    distribuciones = requests.get(
        request._get_scheme() + '://' + request.get_host() + '/static/datos/distribuciones.json').json()

    distribuciones_en = requests.get(
        request._get_scheme() + '://' + request.get_host() + '/static/datos/distribuciones_en.json').json()

    context = {
        'title_meta': _('Distribuciones de efectivo | Fibra Educa'),
        'description': _(
            'La Ley de Impuestos Sobre la Renta exige que una FIBRA distribuya un porcentaje de su ingreso anual, en Fibra Inn realizamos distribuciones de manera mensual. Conoce tus rendimientos aquí.'),
        'title': _('Distribuciones'),
        'image': 'images/breadcrumbs/5.jpg',
        'distribuciones': distribuciones,
        'distribuciones_en': distribuciones_en,
        'subtitle1': '',
        'subtitle2': _(
            'La Ley del Impuesto Sobre la Renta requiere que una FIBRA distribuya anualmente al menos el 95% de su Resultado Fiscal, que es calculado conforme a lo dispuesto en la misma Ley, considerando los ingresos acumulables obtenidos durante el ejercicio fiscal y restando las deducciones autorizadas a la utilidad.'),
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/distribuciones.html', context)


# @cache_page(60 * 15)
def analistas(request):
    context = {
        'title_meta': _('Cobertura de analistas| Fibra Educa'),
        'description': _(
            '¿Quieres saber la opinión de los expertos en FIBRAS de México? Conoce la lista de analistas institucionales que hacen de Fibra Inn.'),
        'title': _('Cobertura de analistas'),
        'image': 'images/breadcrumbs/5.jpg',
        'subtitle1': '',
        'subtitle2': _(
            'Actualmente una base amplia de analistas institucionales cubren el desempeño de nuestros CBFIs, lo que permite a nuestra base de inversionistas accedar a una opinión independiente y objetiva.'),
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/analistas.html', context)


def cotizacion(request):
    prospectos = ProspectosView.get_prospecto_es_data()
    context = {
        'title_meta': _(''),
        'description': _(
            'Aquí encontrarás información sobre el comportamiento histórico de Fibra Educa14 en la Bolsa Mexicana de Valores desde el 2014 hasta hoy.'),
        'title': _('Información bursátil'),
        'prospectos': prospectos,
        'image': 'images/background/educa_header_informacion_bursatil.png',
        'subtitle1': _(''),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/cotizacion.html', context)


def precios_historicos(request):
    context = {
        'title_meta': _('Precios Históricos | Fibra Educa'),
        'description': _(
            'Entérate de la evolución de Fibra Inn. Conoce los precios históricos de nuestros titulos accionarios. ¡Siempre en constante crecimiento!'),
        'title': _('Precios históricos'),
        'image': 'images/breadcrumbs/5.jpg',
        'subtitle1': '',
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/bursatil/precios_historicos.html', context)


# @cache_page(60 * 15)
def invertir(request):
    directivos_principales = DatosView.get_directivo_principal_es_data()
    directivos_resto = DatosView.get_directivo_resto_es_data()
    directivos_all = DatosView.get_directivo_all_es_data()

    destacados = [
        {
            "titulo": "Reporte Anual 2024",
            "imagen": "https://i.imgur.com/6Mb4Q0O.png",  # ejemplo real de imagen externa
            "enlace": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/InformacionFinanciera/ReportesAnuales/Reporte-Anual2024.pdf",
            "resumen": "Consulta el reporte anual 2024 de Fibra Educa."
        },
        {
            "titulo": "Presentación 1T25",
            "imagen": "https://i.imgur.com/kFUzT3n.png",
            "enlace": "https://investorcloud.s3.us-east-1.amazonaws.com/FibraEDUCA/InformacionFinanciera/Presentaciones/FIBRA_EDUCA_CORPORATE_PRESENTATION_1Q25-junio.pdf",
            "resumen": "Presentación corporativa del primer trimestre de 2025."
        },
        {
            "titulo": "Factsheet 1T25",
            "imagen": "https://i.imgur.com/Vs2P5er.png",
            "enlace": "https://investorcloud.s3.amazonaws.com/FibraEDUCA/factsheet-educa-1T25.pdf",
            "resumen": "Resumen ejecutivo con los principales indicadores del 1T25."
        }
    ]
    return render(request, "frontend/es/invertir.html", {
        'title_meta': _('Invetir | Fondo de Fondos'),
        "destacados": destacados,
        "title": "Conoce nuestro portafolio",
        "image": "images/fondo2.png",
        'directivos_principales': directivos_principales['principales'],
        'directivos_principales_count': len(directivos_principales['principales']),
        'directivos_resto': directivos_resto['resto'],
        'directivos_all': directivos_all,

    })


def cdks(request):
    return render(request, "frontend/es/ckd.html", {
        'title_meta': _('CDKs | Fondo de Fondos'),
        "title": "CKDs Administrados",
        "image": "images/fondo2.png",
    })


def gobierno_corporativo(request):
    directivos_principales = DatosView.get_directivo_principal_es_data()
    directivos_resto = DatosView.get_directivo_resto_es_data()
    directivos_all = DatosView.get_directivo_all_es_data()
    return render(request, "frontend/es/gobierno_corp.html", {
        'title_meta': _('Gobierno corporativo | Fondo de Fondos'),
        "title": "Gobierno Corporativo",
        "image": "images/fondo2.png",
        'directivos_principales': directivos_principales['principales'],
        'directivos_principales_count': len(directivos_principales['principales']),
        'directivos_resto': directivos_resto['resto'],
        'directivos_all': directivos_all,
    })


def fundamentales(request):
    return render(request, "frontend/es/fundamentales.html", {
        'title_meta': _('Fundamentales | Fondo de Fondos'),
        "title": "Fundamentales",
        "image": "images/fondo2.png",
    })


# @cache_page(60 * 15)
def blog(request):
    lang = request.LANGUAGE_CODE

    if lang == 'en':
        file_path = 'frontend/static/datos/noticias_eng.json'
    else:
        file_path = 'frontend/static/datos/noticias.json'

    # Convierte a ruta absoluta
    json_path = os.path.join(settings.BASE_DIR, file_path)

    try:
        with open(json_path, encoding='utf-8') as f:
            noticias = json.load(f)
    except FileNotFoundError:
        print(f" No se encontró el archivo: {json_path}")
        noticias = []

    context = {
        'title': _('Noticias | Fibra Educa'),
        'title_meta': _('Noticias'),
        'image': 'images/breadcrumbs/Blog-03.png',
        'subtitle1': _(' '),
        'subtitle2': _(''),
        'noticias': noticias,
    }

    return render(request, f'frontend/{lang}/blog.html', context)


# @cache_page(60 * 15)
def noticia_1(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("Accede al mercado inmobiliario y comienza a Invertir en Fibras | Fibra Educa"),
        'description': _(
            "¿Incertidumbre financiera? Comienza a Invertir en FIBRAs inmobiliarias y acércate a un método de inversión con rendimientos constantes, defensivo y rentable. En Fibra Inn te explicamos."),
        'image': "images/breadcrumbs/1.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/1.html', context)


def noticia_2(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("FIBRA, un nuevo modelo de Inversión en Bienes Raíces | Fibra Educa"),
        'description': _(
            "Descubre los nuevos proyectos de Inversión en Bienes Raíces que una FIBRA propone dentro del mercado bursátil ¡Comienza a recibir más por tu inversión!"),
        'image': "images/breadcrumbs/2.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/2.html', context)


def noticia_3(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("Ventajas de tu Inversión en Bienes Raíces | Fibra Educa"),
        'description': _(
            "Visita nuestro blog y nútrete de contenidos sobre la coyuntura del mercado inmobiliario, con información útil para tu Inversión en Bienes Raíces."),
        'image': "images/breadcrumbs/5.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/3.html', context)


def noticia_4(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("Instrumentos de Inversión en el sector inmobiliario | Fibra Educa"),
        'description': _(
            "¿Quieres comenzar a invertir en el sector inmobiliario? Conoce en cuáles Instrumentos de Inversión puedes poner a trabajar tu dinero. ¡Entra ahora!"),
        'image': "images/breadcrumbs/6.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/4.html', context)


def noticia_5(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("Invierte en grandes propiedades | Fibras Inmobiliarias | Fibra Educa"),
        'description': _(
            "Da el próximo paso en tus inversiones. Con las Fibras Inmobiliarias podrás generar una mayor rentabilidad en el financiamiento de inmuebles de gran escala."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/5.html', context)


def noticia_6(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("¿Qué son las FIBRAs Inmobiliarias? | Inversiones de bajo riesgo | Fibra Educa"),
        'description': _(
            "Las FIBRAs Inmobiliarias son la mejor forma de invertir en el mercado de bienes raíces con un bajo riesgo y grandes beneficios financieros ¡Infórmate!"),
        'image': "images/breadcrumbs/1.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/6.html', context)


def noticia_7(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("Invertir en FIBRAs | ¿Buscas qué hacer con ese dinero extra? | Fibra Educa"),
        'description': _(
            "Al Invertir en FIBRAs podrás aumentar tu riqueza mientras estás respaldado por uno de los mercados más estables de México ¿Qué estás esperando?"),
        'image': "images/breadcrumbs/2.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/7.html', context)


def noticia_8(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("¿Cómo definirías a los Instrumentos de Inversión? | Fibra Educa"),
        'description': _(
            "¿Sabes cuál es la diferencia entre invertir en oro, acciones o bienes raíces? Conoce aquí cuáles son los mejores Instrumentos de Inversión."),
        'image': "images/breadcrumbs/5.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/8.html', context)


def noticia_9(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("FIBRAs en México | Invierte en propiedades de gran escala | Fibra Educa"),
        'description': _(
            "Las FIBRAs en México son instrumentos de inversión innovadores y seguros que ofrecen grandes beneficios a los inversionistas ¡Conoce más!"),
        'image': "images/breadcrumbs/6.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/9.html', context)


def noticia_10(request):
    context = {
        'post': True,
        'title': _('Blog'),
        'title_meta': _("Inversión en Bienes Raíces a montos accesibles | Fibra Educa"),
        'description': _(
            "Te contamos acerca de la FIBRA: una inversión en bienes raíces rentable y transparente que se diferencia de la compra y venta tradicional de inmuebles."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/10.html', context)


def noticia_11(request):
    context = {
        'post': True,
        'numero': 'abril-OT.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Qué son los Certificados Bursátiles Fiduciarios Inmobiliarios? | Fibra Educa"),
        'description': _(
            "Entra y descubre qué son los Certificados Bursátiles Fiduciarios Inmobiliarios y por qué son importantes "
            "si quieres aumentar tus inversiones."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/11.html', context)


def noticia_12(request):
    context = {
        'post': True,
        'numero': 'abril-02.jpg',
        'title': _('Blog'),
        'title_meta': _("3 motivos para realizar una Inversión en FIBRAs | Fibra Educa"),
        'description': _(
            "Realizar una Inversión en FIBRAs resulta beneficioso para aquellos inversionistas que deseen "
            "accesibilidad, seguridad, confianza y diversificación."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/12.html', context)


def noticia_13(request):
    context = {
        'post': True,
        'numero': 'abril-03.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Conoces los beneficios de una Inversión en Bienes Raíces? | Fibra Educa"),
        'description': _(
            "Estas son las ventajas de hacer una Inversión en Bienes Raíces con una de las empresas más sólidas y "
            "transparentes del rubro en México."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/13.html', context)


def noticia_14(request):
    context = {
        'post': True,
        'numero': 'abril-04.jpg',
        'title': _('Blog'),
        'title_meta': _("Consejos para invertir en FIBRAs sin que tu dinero corra peligro | Fibra Educa"),
        'description': _(
            "Invertir en FIBRAs es la mejor forma de diversificar tus inversiones sin que tu capital esté en riesgo ¡Conoce cómo sacarle el máximo provecho!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/14.html', context)


def noticia_15(request):
    context = {
        'post': True,
        'numero': 'abril-05.jpg',
        'title': _('Blog'),
        'title_meta': _("Invertir en Fibras: ¿Por qué elegir un negocio sustentable? | Fibra Educa"),
        'description': _(
            "Te contamos la importancia de Invertir en FIBRAs con una empresa abocada a la sustentabilidad. Conoce nuestra estrategia ASG y sus ventajas."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/15.html', context)


def noticia_16(request):
    context = {
        'post': True,
        'numero': 'mayo-01.jpg',
        'title': _('Blog'),
        'title_meta': _("Guía rápida para entender la Bolsa Mexicana de Valores | Fibra Educa"),
        'description': _(
            "Fibra Inn te cuenta todo lo que necesitas saber para entender la Bolsa Mexicana de Valores y empezar a aumentar tu capital desde el día de hoy."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/16.html', context)


def noticia_17(request):
    context = {
        'post': True,
        'numero': 'mayo-02.jpg',
        'title': _('Blog'),
        'title_meta': _("Instrumentos de Inversión: opciones para poner a trabajar tu dinero | Fibra Educa"),
        'description': _(
            "Explora los distintos Instrumentos de Inversión a los que puedes acceder para poner a trabajar tu dinero y aprovecharlo al máximo."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/17.html', context)


def noticia_18(request):
    context = {
        'post': True,
        'numero': 'mayo-03.jpg',
        'title': _('Blog'),
        'title_meta': _("Garantías que te ofrece una Inversión en Bienes Raíces con Fibras | Fibra Educa"),
        'description': _(
            "Hacer una Inversión en Bienes Raíces implica conocer las garantías que ofrece en cuanto a seguridad, confiabilidad y rentabilidad. ¡Conoce más!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/18.html', context)


def noticia_19(request):
    context = {
        'post': True,
        'numero': 'mayo-04.jpg',
        'title': _('Blog'),
        'title_meta': _("FIBRAs en México: democratizando las inversiones en bienes raíces | Fibra Educa"),
        'description': _(
            "Cuando se habla de FIBRAs en México, también se habla de la democratización del mercado inmobiliario. ¿Por qué? ¡Entérate a continuación!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/19.html', context)


def noticia_20(request):
    context = {
        'post': True,
        'numero': 'mayo-05.jpg',
        'title': _('Blog'),
        'title_meta': _("10 beneficios de Invertir en FIBRAs sobre otro tipo de inversiones | Fibra Educa"),
        'description': _(
            "Invertir en FIBRAs es la mejor forma de entrar al mundo de los bienes raíces y hoy te contaremos cómo sacarle el máximo provecho ¡Entra ya!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/20.html', context)


def noticia_21(request):
    context = {
        'post': True,
        'numero': 'junio-01.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Cómo saber cuánto ganaré al invertir en FIBRAs inmobiliarias? | Fibra Educa"),
        'description': _(
            "Mientras con un banco obtienes una tasa del 2%, al invertir en FIBRAs inmobiliarias tienes rendimientos de aproximadamente 8% anual y recibes distribuciones mensuales."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/21.html', context)


def noticia_22(request):
    context = {
        'post': True,
        'numero': 'junio-02.jpg',
        'title': _('Blog'),
        'title_meta': _("Conoce la opción estrella para tu primera Inversión en Bienes Raíces | Fibra Educa"),
        'description': _(
            "En este artículo te presentamos las opciones tradicionales y la alternativa estrella para que realices tu primera Inversión en Bienes Raíces."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/22.html', context)


def noticia_23(request):
    context = {
        'post': True,
        'numero': 'junio-03.jpg',
        'title': _('Blog'),
        'title_meta': _("El mercado emergente de las FIBRAs en México | Fibra Educa"),
        'description': _(
            "Las FIBRAs en México son un instrumento de inversión relativamente nuevo que ofrece grandes beneficios a pequeños y grandes inversionistas."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/23.html', context)


def noticia_24(request):
    context = {
        'post': True,
        'numero': 'junio-04.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Cómo se originó la Inversión en FIBRAs inmobiliarias? | Fibra Educa"),
        'description': _(
            "¿Sabías que la Inversión en FIBRAs inmobiliarias nace a partir de los REIT de Estados Unidos? ¡Entra y conoce la historia de este modelo de inversión!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/24.html', context)


def noticia_25(request):
    context = {
        'post': True,
        'numero': 'junio-05.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Inversión a 5, 10 o 20 años? Te contamos cuál es la mejor opción | Fibra Educa"),
        'description': _(
            "¿No sabes cuál inversión a largo plazo escoger? ¡Te contamos por qué las Fibras Inmobiliarias son la mejor opción para aumentar tu capital!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/25.html', context)


def noticia_26(request):
    context = {
        'post': True,
        'numero': 'julio/01.jpg',
        'title': _('Blog'),
        'title_meta': _("Instrumentos de Inversión atractivos para este 2021 | Fibra Educa"),
        'description': _(
            "En vista de la transformación que sufrió el mundo en 2020, estos son los Instrumentos de Inversión más destacados para el 2021. Conoce tus alternativas."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/26.html', context)


def noticia_27(request):
    context = {
        'post': True,
        'numero': 'julio/02.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Qué impuestos pago al Invertir en FIBRAs? | Beneficios fiscales | Fibra Educa"),
        'description': _(
            "¿Sabías que al Invertir en FIBRAs cuentas con beneficios fiscales que ningún otro instrumento de inversión te ofrece? ¡Entra para conocer más!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/27.html', context)


def noticia_28(request):
    context = {
        'post': True,
        'numero': 'julio/03.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Cómo obtener el máximo rédito de tu Inversión en Bienes Raíces? | Fibra Educa"),
        'description': _(
            "Con Fibra Inn los rendimientos de tu inversión en Bienes Raíces crecerán exponencialmente conforme pase el tiempo. ¡Entra y conoce más!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/28.html', context)


def noticia_29(request):
    context = {
        'post': True,
        'numero': 'julio/04.jpg',
        'title': _('Blog'),
        'title_meta': _("Fibras en México, 10 años de impulsar al mercado inmobiliario | Fibra Educa"),
        'description': _(
            "Las FIBRAs en México se han convertido en un instrumento de inversión rentable, seguro y sobre todo, estable para los inversionistas. ¡Conoce más!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/29.html', context)


def noticia_30(request):
    context = {
        'post': True,
        'numero': 'julio/05.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Cómo generar Dividendos en Bienes Raíces con FIBRAs? | Fibra Educa"),
        'description': _(
            "Desde la llegada de las FIBRAs, el mercado inmobiliario es más accesible para los inversionistas. Descubre cómo obtener Dividendos en Bienes Raíces."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/30.html', context)


def noticia_31(request):
    context = {
        'post': True,
        'numero': 'julio/06.jpg',
        'title': _('Blog'),
        'title_meta': _("FIBRAs Inmobiliarias: Reactivación y Reapertura Económica  | Fibra Educa"),
        'description': _(
            "Como todo, las FIBRAs Inmobiliarias tuvieron un impacto negativo en 2020. Pero la reactivación económica pinta un panorama favorable a la inversión."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/31.html', context)


def noticia_32(request):
    context = {
        'post': True,
        'numero': 'julio/07.jpg',
        'title': _('Blog'),
        'title_meta': _("¿En qué tipo de propiedades invierto con las Fibras Inmobiliarias? | Fibra Educa"),
        'description': _(
            "Tu inversión en Fibras Inmobiliarias está respaldada por 59 propiedades de alta calidad distribuidas en todo el territorio mexicano con ocupación del 90%."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/32.html', context)


def noticia_33(request):
    context = {
        'post': True,
        'numero': 'julio/09.jpg',
        'title': _('Blog'),
        'title_meta': _("Diversifica tu portafolio, Invierte en FIBRAs inmobiliarias | Fibra Educa"),
        'description': _(
            "Diversificar no es solo probar con nuevos instrumentos financieros. Con FIBRAs inmobiliarias puedes adaptarte y proteger tu patrimonio en varios niveles."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/33.html', context)


def noticia_34(request):
    context = {
        'post': True,
        'numero': 'julio/10.jpg',
        'title': _('Blog'),
        'title_meta': _("¿A qué se refiere la tasa de ocupación en las FIBRAs Inmobiliarias? | Fibra Educa"),
        'description': _(
            "La tasa de ocupación es una cifra clave para entender la rentabilidad de las FIBRAs Inmobiliarias. Entra para conocer todo sobre este concepto."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/34.html', context)


def noticia_35(request):
    context = {
        'post': True,
        'numero': 'julio/11.jpg',
        'title': _('Blog'),
        'title_meta': _("Fibras en México | ¿Hacia dónde va la inversión de Fibra Inn? | Fibra Educa"),
        'description': _(
            "Conoce cómo Fibra Inn trabaja constantemente para que tu inversión en Fibras en México siga siendo rentable y genere riqueza. ¡Entra ya!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/35.html', context)


def noticia_36(request):
    context = {
        'post': True,
        'numero': 'julio/12.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Por qué Fibra Inn es tu aliado ideal para Invertir en FIBRAS? | Fibra Educa"),
        'description': _(
            "Gracias a nuestro gobierno corporativo, portafolio diversificado y proyección a futuro somos tu aliado ideal para Invertir en FIBRAs. ¡Conoce más!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/36.html', context)


def noticia_37(request):
    context = {
        'post': True,
        'numero': 'agosto/01.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Cuál es el futuro de la Inversión en Bienes Raíces? | Fibra Educa"),
        'description': _(
            "¿Sabes por qué las FIBRAs son el instrumento de moda de la Inversión en Bienes Raíces en México? Conoce en profundidad el negocio del futuro."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/37.html', context)


def noticia_38(request):
    context = {
        'post': True,
        'numero': 'agosto/02.jpg',
        'title': _('Blog'),
        'title_meta': _("Conceptos clave para entender cómo invertir en Fibras | Fibra Educa"),
        'description': _(
            "Hay términos del mundo financiero que son un poco difíciles de entender. Aquí encontrarás algunos conceptos clave sobre las Fibras inmobiliarias."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/38.html', context)


def noticia_39(request):
    context = {
        'post': True,
        'numero': 'agosto/03.jpg',
        'title': _('Blog'),
        'title_meta': _("Inversión en Bienes Raíces vs Inversión en la Bolsa de Valores | Fibra Educa"),
        'description': _(
            "Elegir entre una Inversión en Bienes Raíces y una en la Bolsa de Valores puede resultar difícil. Afortunadamente existen las FIBRAs ¡Conoce más!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/39.html', context)


def noticia_40(request):
    context = {
        'post': True,
        'numero': 'agosto/05.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Puedo invertir en FIBRAs aún si no tengo experiencia en el mercado? | Fibra Educa"),
        'description': _(
            "¿Sabías que sin importar cuál es tu experiencia como inversionista puedes invertir en FIBRAs? Conoce los detalles de este modelo aquí. "),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/40.html', context)


# SEPTIEMBRE
def noticia_41(request):
    context = {
        'post': True,
        'numero': 'septiembre/1.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Qué es el nivel de endeudamiento en la Inversión en Fibras? | Fibra Educa"),
        'description': _(
            "Fibra Inn se caracteriza por manejar bajos niveles de endeudamiento y amplias garantías para quienes desean hacer una inversión en Fibras."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/41.html', context)


def noticia_42(request):
    context = {
        'post': True,
        'numero': 'septiembre/2.jpg',
        'title': _('Blog'),
        'title_meta': _("Obtén Dividendos en Bienes Raíces con poco dinero | Fibra Educa"),
        'description': _(
            "Actualmente ya es posible obtener dividendos en bienes raíces sin adquirir o gestionar una propiedad. Entérate por qué Fibra Inn es tu mejor opción."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/42.html', context)


def noticia_43(request):
    context = {
        'post': True,
        'numero': 'septiembre/3.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Por qué ocurren cambios en el portafolio de Fibras Inmobiliarias? | Fibra Educa"),
        'description': _(
            "¿Has observado los últimos cambios en el portafolio de Fibra Inn? El cambio en las fibras inmobiliarias obedece a decisiones correctamente estudiadas."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/43.html', context)


def noticia_44(request):
    context = {
        'post': True,
        'numero': 'septiembre/4.jpg',
        'title': _('Blog'),
        'title_meta': _("Diferencias entre los REITs y las FIBRAs en México | Fibra Educa"),
        'description': _(
            "¿Sabías que aunque los REITs son el gran antecedente de las FIBRAs en México, estos modelos no son lo mismo? Consulta todos los detalles aquí."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/44.html', context)


def noticia_45(request):
    context = {
        'post': True,
        'numero': 'septiembre/5.jpg',
        'title': _('Blog'),
        'title_meta': _("Inversión en Bienes Raíces para principiantes: Conceptos Clave | Fibra Educa"),
        'description': _(
            "Conoce todo lo que necesitas saber sobre las inversiones en Bienes Raíces a través de las Fibras Inmobiliarias. ¡Inversiones seguras e informadas!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/45.html', context)


def noticia_46(request):
    context = {
        'post': True,
        'numero': 'septiembre/6.jpg',
        'title': _('Blog'),
        'title_meta': _("Instrumentos de Inversión Híbridos: Renta Fija y Renta Variable | Fibra Educa"),
        'description': _(
            "Aprendiendo a utilizar los instrumentos de inversión, tanto de renta fija como variable, abrirás tu mundo a un nuevo paradigma de ahorro."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/46.html', context)


# OCTUBRE

def noticia_47(request):
    context = {
        'post': True,
        'numero': 'octubre/1.jpg',
        'title': _('Blog'),
        'title_meta': _("Los Instrumentos de Inversión con mejor proyección para el 2022 | Fibra Educa"),
        'description': _(
            "Si tu proyecto para 2022 es seguir aumentando tu riqueza y encontrar los Instrumentos de Inversión acertados, sigue leyendo este artículo."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/47.html', context)


def noticia_48(request):
    context = {
        'post': True,
        'numero': 'octubre/2.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Cómo afecta la inflación a mi inversión en FIBRAs Inmobiliarias? | Fibra Educa"),
        'description': _(
            "Con Fibra Inn no tendrás que preocuparte por que la inflación afecte a tu inversión en FIBRAs Inmobiliarias. Entra y conoce cómo lo hacemos posible."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/48.html', context)


def noticia_49(request):
    context = {
        'post': True,
        'numero': 'octubre/3.jpg',
        'title': _('Blog'),
        'title_meta': _("Instrumentos de Inversión | Tips para invertir desde joven | Fibra Educa"),
        'description': _(
            "Estos son los instrumentos de inversión más recomendados para capitalizar desde joven. Conoce qué los hace tan llamativos y cómo acceder a estos."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/49.html', context)


def noticia_50(request):
    context = {
        'post': True,
        'numero': 'octubre/4.jpg',
        'title': _('Blog'),
        'title_meta': _("Aprende a invertir en FIBRAS en sólo 5 pasos | Fibra Educa"),
        'description': _(
            "En Fibra Inn te damos las claves para invertir en FIBRAs. Desde generar capital hasta recibir distribuciones aquí aprenderás todo lo que necesitas."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/50.html', context)


def noticia_51(request):
    context = {
        'post': True,
        'numero': 'octubre/5.jpg',
        'title': _('Blog'),
        'title_meta': _("Los mejores estados para Inversión en Bienes Raíces | Fibra Educa"),
        'description': _(
            "¿Cuáles son los estados de México más propicios para tu inversión en bienes raíces? Desarrollo, urbanización e innovación, todo en el mismo lugar.  "),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/51.html', context)


def noticia_52(request):
    context = {
        'post': True,
        'numero': 'octubre/6.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Cómo distribuye Fibra Inn los Dividendos en Inversión? | Fibra Educa"),
        'description': _(
            "Distribuir los dividendos en Inversión y ampliar nuestro portafolio de propiedades es la prioridad #1 en Fibra Inn. ¡El crecimiento es nuestra meta!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _('Conoce a través de nuestros post el atractivo funcionamiento de las FIBRAS'),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/52.html', context)


def noticia_53(request):
    context = {
        'post': True,
        'numero': '22_agosto/1-53.jpg',
        'title': _('Blog'),
        'title_meta': _("Inversión en Bienes Raíces | Conoce la Estrategia de Fibra Inn"),
        'description': _(
            "Descubre la estrategia de Fibra Inn para la Inversión en Bienes Raíces a través de FIBRAs y aumenta tu riqueza de manera segura."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _(''),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/53.html', context)


def noticia_54(request):
    context = {
        'post': True,
        'numero': '22_agosto/2-54.jpg',
        'title': _('Blog'),
        'title_meta': _("Fibra Fideicomiso | ¡Conoce el más reciente logro de Fibra Inn!"),
        'description': _(
            "La fibra fideicomiso Fibra Inn adquirió el portafolio industrial Zeus, convirtiéndose en una de las FIBRAs más exitosas actualmente. ¡Conoce los detalles!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _(''),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/54.html', context)


def noticia_55(request):
    context = {
        'post': True,
        'numero': '22_agosto/3-55.jpg',
        'title': _('Blog'),
        'title_meta': _("FIBRAs Inmobiliarias | 4 datos fundamentales para entenderlas"),
        'description': _(
            "Las FIBRAs inmobiliarias te permiten participar en el mercado de bienes raíces a través de la Bolsa de Valores. Conoce sus características y ventajas."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _(''),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/55.html', context)


def noticia_56(request):
    context = {
        'post': True,
        'numero': '22_agosto/1-56.jpg',
        'title': _('Blog'),
        'title_meta': _("FIBRAs en México | Fibra Inn suma un nuevo Portafolio Industrial"),
        'description': _(
            "Las FIBRAs en México están pasando por un gran momento. Conoce más sobre su desarrollo actual en el rubro industrial. ¡Continúa leyendo!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _(''),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/56.html', context)


def noticia_57(request):
    context = {
        'post': True,
        'numero': '22_agosto/2-57.jpg',
        'title': _('Blog'),
        'title_meta': _("Inversión en bienes raíces México: Consejos para evitar Errores "),
        'description': _(
            "Fibra Inn puede ayudarte a evitar errores en tu inversión en bienes raíces. Conviértete en un inversionista informado y maximiza tus rendimientos."),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _(''),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/57.html', context)


def noticia_58(request):
    context = {
        'post': True,
        'numero': '22_agosto/3-58.jpg',
        'title': _('Blog'),
        'title_meta': _("¿Qué son los CBFI en la inversión en bienes raíces? ¡Entérate!"),
        'description': _(
            "¿Te interesa la inversión en bienes raíces? Esta información sobre CBFI te ayudará a iniciarte en este mundo de los instrumentos de inversión. ¡Entra ya!"),
        'image': "images/breadcrumbs/12.jpg",
        'subtitle1': _(''),
        'subtitle2': '',
    }
    return render(request, f'frontend/{request.LANGUAGE_CODE}/publicaciones/58.html', context)


# End Bursatil

from Crypto.Cipher import AES

import base64

BLOCK_SIZE = 16


def pad(data):
    length = 16 - (len(data) % 16)
    return data + chr(length) * length


def encrypt(message, passphrase):
    IV = Random.new().read(BLOCK_SIZE)
    aes = AES.new(passphrase.encode("utf8"), AES.MODE_CFB, IV, segment_size=128)
    return base64.b64encode(IV + aes.encrypt(pad(message).encode("utf8")))


@require_POST
def newsletter_form(request):
    form = NewsletterForm(request.POST)
    if form.is_valid():
        correo = form.cleaned_data.get('correo')
        cliente = 'Fibra Educa'
        data = {
            'correo': encrypt(correo, os.environ.get("key", "passwordpassword")).decode("utf8"),
            # encryptando correo con contraseña del cliente
            'cliente': cliente
        }
        requests.post('https://investorlists.herokuapp.com/subscribir/', json=data)
        # requests.post('http://127.0.0.1:9000/subscribir/', json=data)
        # result_json = resp.json()
        # if result_json.get('success'):
        #     return JsonResponse({'status': 'success'})
        # else:
        #     return JsonResponse({'status': 'failed'})
        send_mail(
            'Usuario ' + correo + ' desea subscribirse al  sitio ' + cliente,
            'Usuario con email ' + correo + " desea subscribirse al sitio " + cliente,
            'it@investorcloud.net',
            ['ir@fibrainn.com'],
        )
        return JsonResponse({'status': 'success'})

    return JsonResponse({'status': 'failed'})


def investor_kit_zip(request):
    from django.http.response import HttpResponse
    from django.conf import settings
    from zipfile import ZipFile
    from io import BytesIO

    from django.http import HttpResponseRedirect
    directory = os.path.join(settings.BASE_DIR, 'frontend/static/kitFiles')
    downloadfiles = request.GET.getlist('downloadfiles')
    if downloadfiles:
        s = BytesIO()
        zf = ZipFile(s, "w")
        for fpath in downloadfiles:
            fdir, fname = os.path.split(fpath)
            zf.write(directory + '/' + fpath, fname)
        for file in zf.filelist:
            file.create_system = 0
        zf.close()
        resp = HttpResponse(s.getvalue(), content_type='application/zip')
        resp['Content-Disposition'] = 'attachment; filename=InvestorKit.zip'
        return resp
    return HttpResponseRedirect(request.path_info)


def info_relevante(request):
    path = settings.BASE_DIR + "/frontend/static/files/"
    full_path = path + 'InfoRelevante.xlsx'
    from django.http import FileResponse
    response = FileResponse(open(full_path, 'rb'))
    return response


logger = logging.getLogger(__name__)


@require_POST
def contact_form(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        try:
            form = ContactForm(request.POST)
            secret_key = os.getenv("RECAPTCHA_SECRET_KEY")
            data = {
                'response': request.POST.get('contact_recaptcha_response'),
                'secret': secret_key
            }

            resp = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
            result_json = resp.json()

            if result_json.get('success') and result_json.get('score') > 0.7 and form.is_valid():
                nombre = form.cleaned_data['nombre']
                correo = form.cleaned_data['correo']
                tema = form.cleaned_data['tema']
                mensaje = form.cleaned_data['mensaje']

                message = render_to_string('emails/contact.html', {
                    'correo': correo,
                    'nombre': nombre,
                    'tema': tema,
                    'mensaje': mensaje,
                })
                msg = EmailMultiAlternatives('Usuario desea contactar con el administrador del sitio Fibra Educa', '',
                                             'it@investorcloud.net', ['contacto.ir@fibraeduca.com'])
                msg.attach_alternative(message, "text/html")
                msg.send()

                print({"success": True})
                return JsonResponse({'status': 'success'})
            else:
                print({"success": False})
                return JsonResponse({'status': 'failed'})
        except Exception as e:
            print(e)
            return JsonResponse({'status': 'failed'})


@require_POST
def contact_form_exp(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        try:
            form = ContactFormExp(request.POST)
            secret_key = os.getenv("RECAPTCHA_SECRET_KEY")
            data = {
                'response': request.POST.get('contact_recaptcha_response'),
                'secret': secret_key
            }

            resp = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
            result_json = resp.json()

            if result_json.get('success') and result_json.get('score') > 0.7 and form.is_valid():
                nombre = form.cleaned_data['nombre']
                correo = form.cleaned_data['correo']
                estado = form.cleaned_data['estado']
                ciudad = form.cleaned_data['ciudad']
                mensaje = form.cleaned_data['mensaje']

                message = render_to_string('emails/contact-exp.html', {
                    'correo': correo,
                    'nombre': nombre,
                    'estado': estado,
                    'ciudad': ciudad,
                    'mensaje': mensaje,
                })
                msg = EmailMultiAlternatives('Usuario desea contactar con el administrador del sitio Fibra Educa', '',
                                             'it@investorcloud.net', ['contacto.ir@fibraeduca.com'])
                msg.attach_alternative(message, "text/html")
                msg.send()

                print({"success": True})
                return JsonResponse({'status': 'success'})
            else:
                print({"success": False})
                return JsonResponse({'status': 'failed'})
        except Exception as e:
            import sys
            print(e)
            return JsonResponse({'status': 'failed'})


@require_POST
def denuncia_form(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        print('entro a denuncia_form')
        print('form', request.POST)
        print('file', request.FILES)

        try:
            form = DenunciaForm(request.POST)
            file = request.FILES.get('fileUpload')

            secret_key = os.getenv("RECAPTCHA_SECRET_KEY")
            data = {
                'response': request.POST.get('contact_recaptcha_response'),
                'secret': secret_key
            }

            resp = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
            result_json = resp.json()

            if result_json.get('success') and result_json.get('score') > 0.7 and form.is_valid():
                nombre = form.cleaned_data['nombre']
                apellidos = form.cleaned_data['apellidos']
                phone = form.cleaned_data['phone']
                correo = form.cleaned_data['correo']
                mensaje = form.cleaned_data['mensaje']

                message = render_to_string('emails/denuncia.html', {
                    'correo': correo,
                    'nombre': nombre,
                    'apellidos': apellidos,
                    'phone': phone,
                    'mensaje': mensaje,
                })
                # msg = EmailMultiAlternatives('Usuario desea contactar con el administrador del sitio Fibra Educa', '',
                #                              'it@investorcloud.net', ['ir@fibrainn.com'])
                msg = EmailMultiAlternatives('Usuario desea contactar con el administrador del sitio Fibra Educa', '',
                                             'it@investorcloud.net',
                                             ['raul.martinezsolares@fibraeduca.com', 'juan.galindo@fibraeduca.com',
                                              'laura.montes@fibraeduca.com', 'tomas.moctezuma@fibraeduca.com'])
                msg.attach_alternative(message, "text/html")
                msg.attach(file.name, file.read(), file.content_type)
                msg.send()

                print({"success": True})
                return JsonResponse({'status': 'success'})
            else:
                print({"success": False})
                return JsonResponse({'status': 'failed'})
        except Exception as e:
            import sys
            print(e)
            return JsonResponse({'status': 'failed'})


def email_alerts(request):
    context = {
        'title_meta': _(''),
        'description': _(''),
        'title': _('Email Alerts'),
        'subtitle1': _(''),
        'subtitle2': _(''),
        'image': 'images/breadcrumbs/1.jpg',
    }
    return render(request, 'frontend/{0}/alertas_email.html'.format(request.LANGUAGE_CODE), context)


@csrf_exempt
def send_alerta_email(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        try:
            form = AlertEmailForm(request.POST)
            secret_key = os.getenv("RECAPTCHA_SECRET_KEY")
            data = {
                'response': request.POST.get('token'),
                'secret': secret_key
            }

            resp = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
            result_json = resp.json()

            if result_json.get('success') and result_json.get('score') > 0.7 and form.is_valid():
                tipos = form.cleaned_data['tipos']
                first_name = form.cleaned_data['name']
                last_name = form.cleaned_data['lastName']
                email = form.cleaned_data['email']
                company = form.cleaned_data['company']
                contact_type = form.cleaned_data['contactType']

                if request.LANGUAGE_CODE == 'es':
                    template_path = 'frontend/es/emails/send_alerta_email.html'
                else:
                    template_path = 'frontend/en/emails/send_alerta_email.html'
                html_message = loader.render_to_string(
                    template_path,
                    {
                        'tipos': tipos,
                        'name': first_name,
                        'lastName': last_name,
                        'email': email,
                        'company': company,
                        'contactType': contact_type,
                    }
                )

                msg = EmailMultiAlternatives('Fibra Educa Email Alert', '',
                                             'it@investorcloud.net', ['ir@fibrainn.com'])
                msg.attach_alternative(html_message, "text/html")
                msg.send()

                print({"success": True})
                return JsonResponse({"success": True, 'message': 'Gracias por contactarnos.'})
            else:
                print({"success": False})
                return JsonResponse(
                    {'success': False, 'alert': 'error', 'message': 'Lo sentimos, no pudimos enviar el Email.'})

        except Exception as e:
            print(e)
            return JsonResponse(
                {'success': False, 'alert': 'error', 'message': 'Lo sentimos, no pudimos enviar el Email.'})


def calendario(request):
    context = {
        'title': _("Calendario RI"),
        'image': 'images/background/educa_header_calendario.png',
        'eventos_relevantes': eventos_relevantes,
    }
    return render(request, 'frontend/{0}/calendario.html'.format(request.LANGUAGE_CODE), context)

def noticias(request):
    context = {
        'title': _("Noticias "),
        'image': 'images/background/educa_header_calendario.png',
        'eventos_relevantes': eventos_relevantes,
    }
    return render(request, 'frontend/{0}/noticias.html'.format(request.LANGUAGE_CODE), context)

@csrf_exempt
def meeting(request):
    if request.method == 'POST':
        # Get form data
        name = request.POST.get('name')
        company = request.POST.get('company')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # Verify reCAPTCHA
        # recaptcha_response = request.POST.get('g-recaptcha-response')
        # recaptcha_secret = os.getenv("RECAPTCHA_SECRET_KEY")

        # data = {
        # 'response': recaptcha_response,
        # 'secret': recaptcha_secret
        # }

        # r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        # result = r.json()

        # if not result['success']:
        # return JsonResponse({'success': False, 'message': 'Invalid reCAPTCHA. Please try again.'})

        # Now, the rest of your email sending logic here...

        html_message = loader.render_to_string(
            '{0}/frontend/emails/request_meeting.html'.format(request.LANGUAGE_CODE),
            {
                'name': name,
                'company': company,
                'email': email,
                'subject': subject,
                'message': message,
            }
        )

        try:
            send_mail(
                'El usuario desea solicitar una reunión',
                '',
                'it@investorcloud.net',
                ['ir@fibrainn.com'],  # Replace with your email
                fail_silently=False,
                html_message=html_message
            )
        except Exception as e:
            print(e)
            return JsonResponse({'success': False, 'message': 'Lo sentimos, no pudimos enviar el correo electrónico.'})

        return JsonResponse({'success': True, 'message': 'Gracias por contactar con nosotros'})

    return JsonResponse({'success': False, 'message': 'Método no válido'})
