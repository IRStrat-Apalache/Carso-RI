from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contacto', views.contacto, name='contacto'),
    path('contacto-exp', views.contacto_exp, name='contacto-exp'),
    path('contacto-cap', views.contacto_cap, name='contacto-cap'),
    # path('denuncia', views.denuncia, name='denuncia'),
    path('contact-form', views.contact_form, name='contact-form'),
    path('contact-form-exp', views.contact_form_exp, name='contact-form-exp'),
    path('denuncia-form', views.denuncia_form, name='denuncia-form'),
    path('aviso-privacidad', views.aviso_privacidad, name='aviso-privacidad'),

    # path('sustentabilidad', views.sustentabilidad, name='sustentabilidad'),
    path('download/<filename>', views.download, name="download"),
    path('newsletter-form', views.newsletter_form, name='newsletter-form'),
    path('search', views.search, name='search'),
    # path('inversionistas', views.inversionistas, name='inversionistas'),
    # path('como-invertir', views.como_invertir, name='como-invertir'),
  


    path('portafolio/', views.nosotros, name='nosotros'),


    # path('descripcion', views.descripcion, name='descripcion'),
    # path('propiedades', views.propiedades, name='propiedades'),

    #
    # path('modelo-sostenible', views.modelo_asg, name='modelo-sostenible'),
    # path('medio-ambiente', views.medio_ambiente, name='medio-ambiente'),
    # path('responsabilidad-social', views.responsabilidad_social, name='responsabilidad-social'),
    # path('gobernanza', views.gobernanza, name='gobernanza'),
    # path('comunidad', views.comunidad, name='comunidad'),
    # path('certificaciones', views.certificaciones, name='certificaciones'),
    # path('conducta', views.conducta, name='conducta'),
    # path('financiamiento', views.financiamiento, name='financiamiento'),

    # path('reportes-trimestrales', views.trimestrales, name='trimestrales'),
    # path('reportes', views.anuales, name='anuales'),
    # path('presentaciones', views.presentaciones, name='presentaciones'),
    # path('eventos-relevantes', views.eventos_relevantes, name='eventos-relevantes'),
    # path('reportes-financieros', views.reportes_financieros, name='reportes_financieros'),
    # path('faqs', views.faqs, name='faqs'),
    # path('glosario', views.glosario, name='glosario'),
    # path('cobertura-analistas', views.cobertura_analistas, name='cobertura-analistas'),

    # path('comites', views.comites, name='comites'),
    # path('administracion-riesgos', views.administracion_riesgos, name='administracion-riesgos'),
    # path('administrador', views.administrador, name='administrador'),
    # path('auditor-externo', views.auditor_externo, name='auditor-externo'),
    # path('plan-compensacion', views.plan_compensacion, name='plan-compensacion'),
    # path('asambleas-tenedores', views.asambleas_tenedores, name='asambleas-tenedores'),

    # path('acuerdos-asambleas', views.acuerdos_asambleas, name='acuerdos-asambleas'),
    # path('distribuciones', views.distribuciones, name='distribuciones'),
    # path('analistas', views.analistas, name='analistas'),
    # path('cotizacion', views.cotizacion, name='cotizacion'),
    # path('precios-historicos', views.precios_historicos, name='precios-historicos'),

    # path('invertir', views.invertir, name="invertir"),
    path('ckds', views.cdks, name="cdks"),
    path('gobierno-corporativo', views.gobierno_corporativo, name="gobierno-corporativo"),
    path('fundamentales', views.fundamentales, name="fundamentales"),
 path('noticias', views.noticias, name="noticias"),





    path('email-alerts', views.email_alerts, name='email-alerts'),
    path('send-alerta-email', views.send_alerta_email, name='send-alerta-email'),
    # path('calendario', views.calendario, name='calendario'),
    path('meeting', views.meeting, name='meeting'),
] 
