from django import forms


class NewsletterForm(forms.Form):
    correo = forms.EmailField(label='Correo', widget=forms.EmailInput())


CONTACTS = [
    ('Capital', 'Capital'),
    ('RentaFija', 'Renta Fija'),
    ('Analista', 'Analista'),
    ('AgenciaCalificadora', 'Agencia Calificadora'),
    ('Medios', 'Medios'),
    ('Otro', 'Otro'),
]


TIPOS = [
    ('Reportes BMV', 'Reportes BMV'),
    ('Eventos Relevantes', 'Eventos Relevantes'),
    ('Noticias', 'Noticias'),
    ('Aviso a Tenedores', 'Aviso a Tenedores'),
]


class AlertEmailForm(forms.Form):
    name = forms.CharField(label='Nombre', widget=forms.TextInput(), required=True)

    lastName = forms.CharField(label='Apellidos', widget=forms.TextInput(), required=True)

    email = forms.EmailField(label='E-mail', widget=forms.TextInput(), required=True)

    company = forms.CharField(label='Compañía', widget=forms.TextInput(), required=False)

    contactType = forms.ChoiceField(label='Tipo de contacto', choices=CONTACTS, widget=forms.Select(), required=True)

    tipos = forms.MultipleChoiceField(label='Tipos', choices=TIPOS, widget=forms.CheckboxSelectMultiple(),
                                      required=False)


class ContactForm(forms.Form):
    nombre = forms.CharField(label='Nombre', widget=forms.TextInput())

    correo = forms.EmailField(label='Correo', widget=forms.EmailInput())

    tema = forms.CharField(label='Tema', widget=forms.TextInput())

    mensaje = forms.CharField(label='Mensaje', widget=forms.Textarea())


class ContactFormExp(forms.Form):
    nombre = forms.CharField(label='Nombre', widget=forms.TextInput())

    correo = forms.EmailField(label='Correo', widget=forms.EmailInput())

    estado = forms.CharField(label='Estado', widget=forms.TextInput())

    ciudad = forms.CharField(label='Ciudad', widget=forms.TextInput())

    mensaje = forms.CharField(label='Mensaje', widget=forms.Textarea())


class DenunciaForm(forms.Form):
    nombre = forms.CharField(label='Nombre', widget=forms.TextInput())

    correo = forms.EmailField(label='Correo', widget=forms.EmailInput())

    apellidos = forms.CharField(label='Apellidos', widget=forms.TextInput())

    phone = forms.CharField(label='Ciudad', widget=forms.TextInput())

    mensaje = forms.CharField(label='Mensaje', widget=forms.Textarea())
