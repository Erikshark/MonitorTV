
var size = 4;
///ﾠ<img style="height: 15px; width:auto:" src="imagenes/Icono_SeñalNueva.svg"></img>///
///6 = 2 PANTALLAS HORIZONTALMENTE///
///3 = 4 PANTALLAS HORIZONTALMENTE///
///4 = 3 PANTALLAS HORIZONTALMENTE///
var App = {
     channels: {
        '24HTVN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24PLAY.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤ24 PLAYㅤ</div></a></div>'
        },
        'CANAL24HTVN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CANAL24H.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCanal24HTVN.html" frameborder="0"></iframe><a href="Señal24HTVN.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCANAL 24 HORASㅤ</div></a></div>'
        },
        'CNN_CHILE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNCHILE.html" frameborder="0"></iframe><a href="SeñalCNNCHILE.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCNN CHILEㅤ</div></a></div>'
        },
        'MEGANOTICIAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGANOTICIAS.html" frameborder="0"></iframe><a href="SeñalMEGANOTICIAS.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤMEGANOTICIASㅤ</div></a></div>'
        },
        'CHV_NOTICIAS_PlutoTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CHV_NOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHVNOTICIAS_PLUTOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHV NOTICIASㅤ</div></div></div>'
        },
        'T13_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_T13_ENVIVO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalT13_ENVIVO_IFRAME_AINM_GITHUB.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13ㅤ</div></div></div>'
        },
        'TVN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEGA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },
        'LARED': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_LA_RED.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalLARED.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA REDㅤ</div></div></div>'
        },
        'TVMAS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_TVMAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVMAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV MASㅤ</div></div></div>'
        },
        'UCVTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_UCVTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCVTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUCVㅤ</div></div></div>'
        },
        'UCHILE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_UCHILETV_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalUCHILETV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUCHILE TVㅤ</div></div></div>'
        },
        'NTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_NTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNTVㅤ</div></div></div>'
        },
        'WAPP_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/LogoTV_WappTV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWAPPTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWAPP TVㅤ</div></div></div>'
        },
        'TVN_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalTVN_IFRAME_AINM_GITHUB.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'CHV_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCHV_IFRAME.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL13_WEB_IFRAME': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="../Monitores/Senal/WEB/SeñalCANAL13_IFRAME_AINM_GITHUB.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 1ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 2ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 3ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_4.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 4ㅤ</div></div></div>'
        },
        'Señal_Interna_24HTVN_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠSEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInterna24H_5.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24HORAS 5ㅤ</div></div></div>'
        },
        'Señal_Interna_CNNCHILE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalInternaCNNCHILE_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNNCHILE 1ㅤ</div></div></div>'
        },
        'CHVEVENTOS': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>ﾠEVENTOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCHV_EVENTOS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHV EVENTOSㅤ</div></div></div>'
        },


        'ADNRADIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Logo_ADNRADIO.svg"></img>ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_ADN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤADN RADIOㅤ</div></div></div>'
        },
        'COOPERATIVA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Logo_Radio_Cooperativa.svg"></img>ﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_COOPERATIVA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOOPERATIVAㅤ</div></div></div>'
        },
        'BIOBIOTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Logo_BIOBIOCHILE.svg"></img>ﾠBIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_BIOBIOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO TVㅤ</div></div></div>'
        },
        'T13RADIO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Tele13RADIO.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_T13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13 RADIOㅤ</div></div></div>'
        },
        'INFINITA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 15px; width:auto:" src="imagenes/Logo_Radio_Infinita.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_INFINITA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO INFINITAㅤ</div></div></div>'
        },
        'LA_CLAVE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Logo_RadioLaClave.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_LACLAVE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO LA CLAVEㅤ</div></div></div>'
        },
        'TIEMPO': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Logo_RadioTiempo.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_TIEMPO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO TIEMPOㅤ</div></div></div>'
        },
        'PUDAHUEL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Logo_RadioPudahuel.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_PUDAHUEL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO PUDAHUELㅤ</div></div></div>'
        },
        'SeñalRADIO_DUNA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span><img style="height: 20px; width:auto:" src="imagenes/Logo_RadioDuna.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_DUNA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO DUNAㅤ</div></div></div>'
        },


        'RLN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>AYSEN | RADIO LAS NIEVESﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIOLASNIEVES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO LAS NIEVESㅤ</div></div></div>'
        },
        'MILENARIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>AYSEN | RADIO MILENARIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_MILENARIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO MILENARIAㅤ</div></div></div>'
        },
        'GENIAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>AYSEN | RADIO GENIAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_GENIAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO GENIALㅤ</div></div></div>'
        },
        'CANAL_SUR_PATAGONIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">mic</span>AYSEN | CANAL SUR PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRADIO_CANALSURPATAGONIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO CANAL SUR PATAGONIAㅤ</div></div></div>'
        },


        'PRESIDENCIA': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠPRESIDENCIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'PRESIDENCIA2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠPRESIDENCIA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'GOB_CL': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠGOBIERNO DE CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESIDENCIA_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'PDTE_BORIC': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span><img style="height: 20px; width:auto:" src="imagenes/Logo_GOB.svg"></img>ﾠPDTE. BORIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC0gQkOPt6VVvJGO9mDy0ikw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESIDENCIAㅤ</div></div></div>'
        },
        'SENADO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>TV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSENADO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADOㅤ</div></div></div>'
        },
        'DIPUTADOS_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>DIPUTADOS TVﾠ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCDTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS TVㅤ</div></div></div>'
        },
        'SENADO_YouTube': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTV SENADO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC4GJ43VNn4AYfiYa0RBCHQg&autoplay=true&mute=1"frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADOㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYd5k2TyOyOmUJNx0SH17KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS TVㅤ</div></div></div>'
        },
        'CONVENCION_YouTube': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCONVENCION CONSTITUCIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRlIWVAxQdAnCl4D4UR9r3Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONVENCION CONSTITUCIONALㅤ</div></div></div>'
        },
        'REUTERS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalREUTERS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤREUTERSㅤ</div></div></div>'
        },
        'REUTERS_WEB': {
            'nombre': '<span style="margin-right: 10px; color: #0035FF" class="material-icons">cell_tower</span>REUTERS WEB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.reuters.tv/live?nonav=true" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤREUTERSㅤ</div></div></div>'
        },
        'TELEMUNDO': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELEMUNDONOTICIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_01': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_01.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 1ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_02': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_02.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 2ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_03': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_03.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 3ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_04': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_04.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 4ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_05': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_05.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 5ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_06': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_06.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 6ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_07': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_07.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 7ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_08': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_08.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 8ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_09': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_09.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 9ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_10': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_10.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 10ㅤ</div></div></div>'
        },
        'SeñalVOA_LIVE_13': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA TV LIVE 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVOA_LIVE_13.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA TV LIVE 13ㅤ</div></div></div>'
        },
        'SKY_NEWS_EXTRA_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SKY NEWS EXTRA 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS_EXTRA_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWS EXTRA 1ㅤ</div></div></div>'
        },
        'SKY_NEWS_EXTRA_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SKY NEWS EXTRA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS_EXTRA_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWS EXTRA 2ㅤ</div></div></div>'
        },
        'SKY_NEWS_EXTRA_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SKY NEWS EXTRA 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS_EXTRA_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWS EXTRA 3ㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 1ㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 2ㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 3ㅤ</div></div></div>'
        },
        'NBC_NEWS_NOW_EVENT_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>NBC NEWS LIVE EVENT 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBC_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWS LIVE EVENT 4ㅤ</div></div></div>'
        },
        'CBSNEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CBS NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCBS NEWS LIVE 1ㅤ</div></div></div>'
        },
        'CBSNEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CBS NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCBS NEWS LIVE 2ㅤ</div></div></div>'
        },
        'CBSNEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CBS NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCBS NEWS LIVE 3ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 1ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 2ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 3ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 4ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 5ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 6ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_7.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 7ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_8.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 8ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_9': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 9',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_9.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 9ㅤ</div></div></div>'
        },
        'ABCNEWS_LIVE_10': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ABC NEWS LIVE 10',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCNEWS_LIVE_10.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWS LIVE 10ㅤ</div></div></div>'
        },
        'CNN_NEWS_SOURCE_LIVE_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN NEWS SOURCE LIVE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_NEWS_SOURCE_LIVE_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN NEWS SOURCE 1ㅤ</div></div></div>'
        },
        'CNN_NEWS_SOURCE_LIVE_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN NEWS SOURCE LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_NEWS_SOURCE_LIVE_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN NEWS SOURCE 2ㅤ</div></div></div>'
        },
        'CNN_NEWS_SOURCE_LIVE_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN NEWS SOURCE LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_NEWS_SOURCE_LIVE_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN NEWS SOURCE 3ㅤ</div></div></div>'
        },
        'CNN_NEWS_SOURCE_LIVE_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN NEWS SOURCE LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_NEWS_SOURCE_LIVE_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN NEWS SOURCE 4ㅤ</div></div></div>'
        },
        'CNN_NEWS_SOURCE_LIVE_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN NEWS SOURCE LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_NEWS_SOURCE_LIVE_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN NEWS SOURCE 5ㅤ</div></div></div>'
        },
        'CNN_NEWS_SOURCE_LIVE_6': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN NEWS SOURCE LIVE 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_NEWS_SOURCE_LIVE_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN NEWS SOURCE 6ㅤ</div></div></div>'
        },
        'CNN_NEWS_SOURCE_LIVE_7': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN NEWS SOURCE LIVE 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_NEWS_SOURCE_LIVE_7.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN NEWS SOURCE 7ㅤ</div></div></div>'
        },
        'CNN_LIVE_EVENT_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN LIVE EVENT 1ㅤ</div></div></div>'
        },
        'CNN_LIVE_EVENT_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN LIVE EVENT 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN LIVE EVENT 2ㅤ</div></div></div>'
        },
        'CNN_LIVE_EVENT_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN LIVE EVENT 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN LIVE EVENT 3ㅤ</div></div></div>'
        },
        'CNN_LIVE_EVENT_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN LIVE EVENT 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN LIVE EVENT 4ㅤ</div></div></div>'
        },
        'CNN_LIVE_EVENT_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN LIVE EVENT 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_LIVE_EVENT_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN LIVE EVENT 5ㅤ</div></div></div>'
        },
        'CNNI_LIVE_EVENT_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CNN INTERNATIONAL LIVE EVENT 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNI_LIVE_EVENT_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNNI LIVE EVENT 1ㅤ</div></div></div>'
        },
        '24H_TVE_LIVE_OCASIONAL_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>24H TVE LIVE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVE LIVE 2ㅤ</div></div></div>'
        },
        '24H_TVE_LIVE_OCASIONAL_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>24H TVE LIVE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVE LIVE 3ㅤ</div></div></div>'
        },
        '24H_TVE_LIVE_OCASIONAL_4': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>24H TVE LIVE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVE LIVE 4ㅤ</div></div></div>'
        },
        '24H_TVE_LIVE_OCASIONAL_5': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>24H TVE LIVE 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24H_TVE_OCASIONAL_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVE LIVE 5ㅤ</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVE LIVE OCASIONAL 1ㅤ</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVE LIVE OCASIONAL 2ㅤ</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_3': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVE LIVE OCASIONAL 3ㅤ</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_4': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVE LIVE OCASIONAL 4ㅤ</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_5': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVE LIVE OCASIONAL 5ㅤ</div></div></div>'
        },
        'RTVE_LIVE_OCASIONAL_6': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>RTVE LIVE OCASIONAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRTVEOCASIONAL_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTVE LIVE OCASIONAL 6ㅤ</div></div></div>'
        },
        'Señal_CBS46_WGCL_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CBS46 WGCL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBS46_WGCL_TV.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCBS46 WGCL TVㅤ</div></div></div>'
        },
        'WYYK_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>WKYC 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWKYC_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWKYC 1ㅤ</div></div></div>'
        },
        'WYYK_2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>WKYC 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWKYC_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWKYC 2ㅤ</div></div></div>'
        },
        'KHOU_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>KHOU 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalKHOU_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKHOU 1ㅤ</div></div></div>'
        },
        'KHOU_2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>KHOU 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalKHOU_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKHOU 2ㅤ</div></div></div>'
        },
        'KHOU_3': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>KHOU 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalKHOU_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤKHOU 3ㅤ</div></div></div>'
        },
        'TEGNADIGITAL_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">cell_tower</span>WHITE HOUSE VIDEO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTEGNADIGITAL_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTEGNADIGITAL 1ㅤ</div></div></div>'
        },
        'ONU_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>ONU WEB TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="http://www.kaltura.com//p/2503451/embedPlaykitJs/uiconf_id/47917953?iframeembed=true&entry_id=1_gb6tjmle" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤONU WEB TVㅤ</div></div></div>'
        },
        'CCTV+1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CCTV+ 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCCTVPLUS_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCCTV+ 1ㅤ</div></div></div>'
        },
        'CCTV+2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">cell_tower</span>CCTV+ 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCCTVPLUS_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCCTV+ 2ㅤ</div></div></div>'
        },

        
        'SERVEL': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SERVEL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCB8s6rETjmWgXrp_BxyXqdg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSERVELㅤ</div></div></div>'
        },
        'AGENCIA_UNO': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>AGENCIA UNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalAGENCIAUNOTV_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAGENCIA UNOㅤ</div></div></div>'
        },
        'MEDIABANCO_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>MEDIABANCO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalMEDIABANCO_YT.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEDIABANCOㅤ</div></div></div>'
        },
        'TELEMUNDO_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRwA1NUcUnwsly35ikGhp0A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'VOA_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOA ESP',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCJ46VgZgCMLFUvOT671AOJw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA ESPㅤ</div></div></div>'
        },
        'REUTERS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UChqUTb7kYRX8-EiaN3XFrSQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤREUTERSㅤ</div></div></div>'
        },
        'INFOBAE_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>INFOBAE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCvsU0EGXN7Su7MfNqcTGNHg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤINFOBAEㅤ</div></div></div>'
        },



        'RUPTLY': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>RUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC5aeU5hk31cLzq_sAExLVWg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRUPTLYㅤ</div></div></div>'
        },
        'SPUTNIK': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCI4lx9retCL7_cBmmceEQ8g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPUTNIKㅤ</div></div></div>'
        },
        'ELPAIS': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>EL PAIS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnsvJeZO4RigQ898WdDNoBw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEL PAISㅤ</div></div></div>'
        },
        'MARCA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>MARCA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCop57Z1sYHrtCyxCpE2z2Bg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMARCAㅤ</div></div></div>'
        },
        'LA_VANGUARDIA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>LA VANGUARDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClLLRs_mFTsNT5U-DqTYAGg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA VANGUARDIAㅤ</div></div></div>'
        },


        
        'THE_SUN': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>THE SUN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCIzXayRP7-P0ANpq-nD-h5g&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTHE SUNㅤ</div></div></div>'
        },
        'WKYC_Channel 3': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>WKYC Channel 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCNBmxc6FvKyxtCpUygcdINA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWKYC Channel 3ㅤ</div></div></div>'
        },


        'NHK': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/jp.svg"></img>ﾠNHK WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNHK.html" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNHK WORLDㅤ</div></div></div>'
        },
        'IRAN_INT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ir.svg"></img>ﾠIRAN INTERNATIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalIRAN_INTERNACIONAL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤIRAN INTERNATIONALㅤ</div></div></div>'
        },
        'PRESSTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ir.svg"></img>ﾠPRESS TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPRESSTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPRESS TVㅤ</div></div></div>'
        },
        'HISPANTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ir.svg"></img>ﾠHISPAN TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalHISPANTV_ESP.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤHISPAN TVㅤ</div></div></div>'
        },
        'TRTWORLD': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/tr.svg"></img>ﾠTRT WORLD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTRTWORLD.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTRT WORLDㅤ</div></div></div>'
        },
        'AL_JAZEERA_ARABIC': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 20px" src="https://flagcdn.com/qa.svg"></img>ﾠAL JAZEERA ARABIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/eJ6ZMd4sVrI?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAL JAZEERAㅤ</div></div></div>'
        },
        'AL_JAZEERA_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width: 20px" src="https://flagcdn.com/qa.svg"></img>ﾠAL JAZEERA ENG',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-upyPouRrB8?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAL JAZEERAㅤ</div></div></div>'
        },
        'TN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠTN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTN.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTNㅤ</div></div></div>'
        },
        'CANAL_26_ARG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠCANAL 26',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCANAL_26_ARG.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 26ㅤ</div></div></div>'
        },
        'ABCTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/py.svg"></img>ﾠABC TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABCTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC TVㅤ</div></div></div>'
        },
        'ATV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠATV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalATV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤATVㅤ</div></div></div>'
        },
        'ATV+': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠATV PLUS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalATVPLUS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤATV PLUSㅤ</div></div></div>'
        },
        'TVPERUINTERNACIONAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠTVPERU INTERNACIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVPERU_INTERNACIONAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVPERU INTERNACIONALㅤ</div></div></div>'
        },
        'PANAMERICANATV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠPANAMERICANA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPANAMERICANATV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPANAMERICANA TVㅤ</div></div></div>'
        },
        'WILLAX_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠWILLAX TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalWILLAXTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWILLAX TVㅤ</div></div></div>'
        },
        'ONDADIGITALTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠONDA DIGITAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalONDADIGITALTV_1.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤONDA DIGITAL TVㅤ</div></div></div>'
        },
        'NOTICIASCARACOL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/co.svg"></img>ﾠNOTICIAS CARACOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCARACOLNOTICIAS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNOTICIAS CARACOLㅤ</div></div></div>'
        },
        'TELESUR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ve.svg"></img>ﾠTELESUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTELESUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELESURㅤ</div></div></div>'
        },
        'VTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ve.svg"></img>ﾠVTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalVTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVTVㅤ</div></div></div>'
        },
        'TVes': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ve.svg"></img>ﾠTVes',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVes.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVesㅤ</div></div></div>'
        },
        'FORO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/mx.svg"></img>ﾠFORO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUsm-fannqOY02PNN67C0KA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFORO TVㅤ</div></div></div>'
        },
        'EURONEWS_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ESPAÑOLㅤ</div></div></div>'
        },
        'EURONEWS_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ENGLISHㅤ</div></div></div>'
        },
        'EURONEWS_RU': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS RUSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_RUSO.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS RUSOㅤ</div></div></div>'
        },
        'EURONEWS_PORT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS PORTUGUÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_PORTUGUES.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS PORTUGUÉSㅤ</div></div></div>'
        },
        'EURONEWS_ALB': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ALBANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ALBANIA.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ALBANIAㅤ</div></div></div>'
        },
        'EURONEWS_ITA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalEURONEWS_ITALIANO.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ITALIANOㅤ</div></div></div>'
        },
        'FRANCE24': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/fr.svg"></img>ﾠFRANCE24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFRANCE24.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRANCE24ㅤ</div></div></div>'
        },
        'FRANCE24_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/fr.svg"></img>ﾠFRANCE24 ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFRANCE24_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRANCE24 ESPAÑOLㅤ</div></div></div>'
        },
        'FRANCE24_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/fr.svg"></img>ﾠFRANCE24 ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFRANCE24_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRANCE24 ENGLISHㅤ</div></div></div>'
        },
        '24HTVE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/es.svg"></img>ﾠCANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Señal24HORASTVE.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVEㅤ</div></div></div>'
        },
        'LA1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/es.svg"></img>ﾠLA 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVE_LA1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA 1ㅤ</div></div></div>'
        },
        'LA2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/es.svg"></img>ﾠLA 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVE_LA2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA 2ㅤ</div></div></div>'
        },
        'DW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalDW_DEUTSCH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW DEUTSCHㅤ</div></div></div>'
        },
        'DWENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalDW_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW ENGLISHㅤ</div></div></div>'
        },
        'DWESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalDW_ESPAÑOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW ESPAÑOLㅤ</div></div></div>'
        },
        'RT_ENG': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_ENGLISH.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRT ENGLISHㅤ</div></div></div>'
        },
        'RT_ESP': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_ESPANOL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRT ESPAÑOLㅤ</div></div></div>'
        },
        'RT_FR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT FRANCE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_FRANCE.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRT FRANCEㅤ</div></div></div>'
        },
        'RT_ALEMAN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT ALEMAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalRT_ALEMAN.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRT ALEMANㅤ</div></div></div>'
        },
        'SKY_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/gb.svg"></img>ﾠSKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalSKY_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWSㅤ</div></div></div>'
        },
        'ABC_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠABC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalABC_NEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤABC NEWSㅤ</div></div></div>'
        },
        'NBC_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠNBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNBCNEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWSㅤ</div></div></div>'
        },
        'CBS_NEWS': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCBS NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCBSNEWS.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCBS NEWSㅤ</div></div></div>'
        },
        'FOX_NEWS_NOW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠFOX NEWS NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFOX_NEWS_NOW.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFOX NEWS NOWㅤ</div></div></div>'
        },
        'FOX_NEWS_WEATHER': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠFOX WEATHER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalFOX_WEATHER.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFOX NEWS WEATHERㅤ</div></div></div>'
        },
        'CNN_INTERNACIONAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCNN INTERNATIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNINTERNACIONAL.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN INTERNATIONALㅤ</div></div></div>'
        },
        'CNN_INDONESIA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/id.svg"></img>ﾠCNN INDONESIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNNINDONESIA.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN INDONESIAㅤ</div></div></div>'
        },
        'CNN_PHILIPPINES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ph.svg"></img>ﾠCNN PHILIPPINES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCNN_PHILIPPINES.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN PHILIPPINESㅤ</div></div></div>'
        },
        'CNN_BRASIL': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/br.svg"></img>ﾠCNN BRASIL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCvdwhh_fDyWccR42-rReZLw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN BRASILㅤ</div></div></div>'
        },
        'NBCNEWS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠﾠNBC NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeY0bbntWzzVIaj2z3QigXg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNBC NEWSㅤ</div></div></div>'
        },
        'UNIVISION_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠﾠUNIVISION NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC32TdiIsh_5X8tKr_9rKQyA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUNIVISION NOTICIASㅤ</div></div></div>'
        },
        'SKY_NEWS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/gb.svg"></img>ﾠSKY NEWS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoMdktPbSTixAyNGwb-UYkQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSKY NEWSㅤ</div></div></div>'
        },
        'DW_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDWㅤ</div></div></div>'
        },
        'DWENG_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW ENGLISHㅤ</div></div></div>'
        },
        'DWESP_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/de.svg"></img>ﾠDW ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCT4Jg8h03dD0iN3Pb5L0PMA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDW ESPAÑOLㅤ</div></div></div>'
        },
        'EURONEWS_ESP_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyoGb3SMlTlB8CLGVH4c8Rw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ESPAÑOLㅤ</div></div></div>'
        },
        'EURONEWS_ENG_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSrZ3UV4jOidv8ppoVuvW9Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ENGLISHㅤ</div></div></div>'
        },
        'EURONEWS_RU_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS RUSO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFzJjgVicCtFxJ5B0P_ei8A&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS RUSOㅤ</div></div></div>'
        },
        'EURONEWS_PORT_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS PORTUGUÉS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUmEPYxmnyQDeRUcFkslmQw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS PORTUGUÉSㅤ</div></div></div>'
        },
        'EURONEWS_ALB_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ALBANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UChR-A__NS_C5kHDWj3PeAhw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ALBANIAㅤ</div></div></div>'
        },
        'EURONEWS_ITA_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/eu.svg"></img>ﾠEURONEWS ITALIANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC1mX9vuLOYf8fhaXS_KcDRg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEURONEWS ITALIANOㅤ</div></div></div>'
        },
        'FRANCE24_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/fr.svg"></img>ﾠFRANCE24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCCCPCZNChQdGa9EkATeye4g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRANCE24ㅤ</div></div></div>'
        },
        'FRANCE24_ESP_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/fr.svg"></img>ﾠFRANCE24 ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUdOoVWuWmgo1wByzcsyKDQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRANCE24 ESPAÑOLㅤ</div></div></div>'
        },
        'FRANCE24_ENG_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/fr.svg"></img>ﾠFRANCE24 ENGLISH',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRANCE24 ENGLISHㅤ</div></div></div>'
        },
        'TVPERU_NOTICIAS': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠTVPERU NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkZCoc42IipR1ucqJmIehsA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVPERU NOTICIASㅤ</div></div></div>'
        },
        'ATV_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠATV NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYG5uXS3xdsoaXIxum1pAEw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤATV NOTICIASㅤ</div></div></div>'
        },
        'EXITOSA_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠRADIO EXITOSA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCbyblOHU12USUbbPL_M7BNg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRADIO EXITOSAㅤ</div></div></div>'
        },
        'LATINA_TV_NOTICIAS': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/pe.svg"></img>ﾠLATINA NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpSJ5fGhmAME9Kx2D3ZvN3Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLATINA NOTICIASㅤ</div></div></div>'
        },
        'AMERICA_TV_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠAMERICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6NVDkuzY2exMOVFw4i9oHw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAMERICA TVㅤ</div></div></div>'
        },
        'A24_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠA24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤA24ㅤ</div></div></div>'
        },
        'IP_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠIP NOTICIAS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC1bBjOZieJWHbsFA0LwjjJA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤIP NOTICIASㅤ</div></div></div>'
        },
        'TV_PUBLICA_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠTV PUBLICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV PUBLICAㅤ</div></div></div>'
        },
        'C5N_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠC5N',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤC5Nㅤ</div></div></div>'
        },
        'LA_NACION_ARG': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠLA NACION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLA NACIONㅤ</div></div></div>'
        },
        '24HTVE_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/es.svg"></img>ﾠCANAL 24 HORAS TVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC7QZIf0dta-XPXsp9Hv4dTw&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ24H TVEㅤ</div></div></div>'
        },
        'RT_YT_2': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpwvZwUam-URkxB7g4USKpg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRTㅤ</div></div></div>'
        },
        'RT_ENVIVO_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ru.svg"></img>ﾠRT ESPAÑOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCEIhICHOQOonjE6V0SLdrHQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRT ESPAÑOLㅤ</div></div></div>'
        },
        'UCRANIA24': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ua.svg"></img>ﾠUCRANIA24',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCMp5Buw-6LpbbV9r9Sl_5yg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤUCRANIA24ㅤ</div></div></div>'
        },

        
        'FOX35ORLANDO': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠFOX 35 ORLANDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCuXT13wiqK56NR7QSfDWpvg&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFOX 35 ORLANDOㅤ</div></div></div>'
        },
        'FOX5_WDC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠFOX 5 WASHINGTON DC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCHLyP4MuA-JAFBCwxXOEDdA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFOX 5 WASHINGTON DCㅤ</div></div></div>'
        },
        'WCNC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠWCNC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC-RxXi2Xws6Uk22vp-sLbGA&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤWCNCㅤ</div></div></div>'
        },
        '11ALIVE': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠ11 ALIVE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCzF4Ryn8TKn64md77gS5Q5Q&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ11ALIVEㅤ</div></div></div>'
        },
        //'CNN_ESP2': {
        //    'nombre': '</img><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNESP.svg"></img></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fKacUV-8WBo?autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN ESPAÑOLㅤ</div></div></div>'
        //},
        //'BBC': {
        //    'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_BBC.svg"></img>',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalBBC.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBBCㅤ</div></div></div>'
        //},
        '24HTVN_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=true&mute=1" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 24Hㅤ</div></div></div>'
        },
        'DocumentacionTVN_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px; color: #FF4900" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HTVN.svg"></img>ﾠ<img style="height: 15px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠDOCUMENTACION TVN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCeKSSTjG4r-Qvcpjnwgo0VQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDOCUMENTACION TVNㅤ</div></div></div>'
        },
        'CNN_CHILE_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCpOAcjJNAp0Y0fhznRrXIJQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN CHILEㅤ</div></div></div>'
        },
        'MEGANOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCkccyEbqhhM3uKOI6Shm-4Q&autoplay=true&mute=1" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIASㅤㅤ</div></div></div>'
        },
        'CHV_NOTICIAS_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CHV_NOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRsUoZYC1ULUspipMRnMhwg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHV NOTICIASㅤ</div></div></div>'
        },
        'T13_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_T13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsRnhjcUCR78Q3Ud6OXCTNg&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13 MOVILㅤ</div></div></div>'
        },
        'TVN_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCaVaCaiG6qRzDiJDuEGKOhQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCEpId-jtRABuZyX6D2z6FZQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC8EdTmyUaFIfZvVttJ9lgIA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL 13_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCd4D3LfXC_9MY2zSv_3gMgw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },

        '24HTVN_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_24HORAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F24horas.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe></div><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 24Hㅤ</div></div></div>'
        },
        'CNN_CHILE_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CNNCHILE2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcnnchile%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCNN CHILEㅤ</div></div></div>'
        },
        'MEGANOTICIAS_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_MEGANOTICIAS.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeganoticiascl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div href="SeñalMEGANOTICIAS.html" class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGANOTICIASㅤㅤ</div></div></div>'
        },
        'T13_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_T13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fteletrece%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤT13 MOVILㅤ</div></div></div>'
        },
        'TVN_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftvn.cl%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVNㅤ</div></div></div>'
        },
        'MEGA_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_MEGA.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMEGACL%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMEGAㅤ</div></div></div>'
        },
        'CHV_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_CHV.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fchilevision%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCHVㅤ</div></div></div>'
        },
        'CANAL 13_FACEBOOK': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span><img style="height: 20px; width:auto:" src="imagenes/Logo_Canal13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Felcanal13%2Flive%2F&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCANAL 13ㅤ</div></div></div>'
        },


        'REUTERS_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>REUTERS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Reuters/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤREUTERSㅤ</div></div></div>'
        },
        'TELEMUNDO_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>TELEMUNDO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/NoticiasTelemundo/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTELEMUNDOㅤ</div></div></div>'
        },
        'VOA_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>VOZ DE AMERICA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVOA ESPㅤ</div></div></div>'
        },
        'RUPTLY_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>RUPTLY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Ruptly/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRUPTLYㅤ</div></div></div>'
        },
        'SPUTNIK_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">cell_tower</span>SPUTNIK',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/SputnikNews/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPUTNIKㅤ</div></div></div>'
        },
        'ADNRADIO_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">mic</span>ADN RADIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/VozDeAmerica/live/&show_text=0&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤADN RADIOㅤ</div></div></div>'
        },
        'COOPERATIVA_FB': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">mic</span>COOPERATIVA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Cooperativa/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOOPERATIVAㅤ</div></div></div>'
        },
        'TVN_FB_ANTOFAGASTA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠANTOFAGASTA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/TVNREDANTOFAGASTA/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN ANTOFAGASTAㅤ</div></div></div>'
        },
        'TVN_FB_COQUIMBO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠCOQUIMBO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/redcoquimbotvn/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN COQUIMBOㅤ</div></div></div>'
        },
        'TVN_FB_VALPARAISO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠVALPARAISO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Tvn-Red-Valparaíso-1051261168227502/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN VALPARAISOㅤ</div></div></div>'
        },
        'TVN_FB_OHIGGINS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠOHIGGINS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnohiggins/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN OHIGGINSㅤ</div></div></div>'
        },
        'TVN_FB_MAULE': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠMAULE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/TVNRedMaule/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN MAULEㅤ</div></div></div>'
        },
        'TVN_FB_BIOBIO': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠBIOBIO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnredbiobio/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN BIOBIOㅤ</div></div></div>'
        },
        'TVN_FB_ARAUCANIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠARAUCANIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/tvnredaraucaniaoficial/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN ARAUCANIAㅤ</div></div></div>'
        },
        'TVN_FB_AUSTRAL': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Facebook.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_TVN.svg"></img>ﾠAUSTRAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/redaustral/live/&show_text=1&mute=0" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTVN AUSTRALㅤ</div></div></div>'
        },

        
        'TC_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠTRIB. CONSTITUCIONAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCZaI-1N1oaGb-U8K2VNztjg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTRIB. CONSTITUCIONALㅤ</div></div></div>'
        },

        
        'CONVENCION_CONSTITUCIONAL_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_1.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal1.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal1.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 1ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_2.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal2.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal2.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 2ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_3.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal3.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 3ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_4.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal4.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 4ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_5.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal5.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 5ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_6.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal6.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 6ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_7': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_7.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal7.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 7ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_8': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_8.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal8.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 8ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_9': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_9.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal9.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 9ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_10': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_10.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal10.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 10ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_11': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_11.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal11.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 11ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_12': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_12.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal12.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 12ㅤ</div></a></div>'
        },
        'CONVENCION_CONSTITUCIONAL_13': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_Convencion_Constitucional_Señal_13.svg"></img>',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/ConvencionConstitucional/Senal13.html" frameborder="0"></iframe><a href="Senal/ConvencionConstitucional/Senal3.html" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤCONVENCION CONSTITUCIONAL - SEÑAL 13ㅤ</div></a></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_1': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 1',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRlIWVAxQdAnCl4D4UR9r3Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 1ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_2': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 2',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCXdVTVjJR0O-VbN78Sd89Gg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 2ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_3': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 3',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCrU5uanHGl-cc7ZdLatPDDg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 3ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_4': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 4',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnRIVAs0Ov_-QYqEVfA2MRQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 4ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_5': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 5',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSzWo-vzG3F54HJs7e3CXxw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 5ㅤ</div></div></div>'
        //},
        //'CONVENCION_CONSTITUCIONAL_YouTube_6': {
        //    'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠSEÑAL 6',
        //    'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCjj0ghVa8skE1jNq4pQyhrA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSEÑAL 6ㅤ</div></div></div>'
        },
        'TV_SENADO_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_1.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 2ㅤ</div></div></div>'
        },
        'TV_SENADO_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_2.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 2ㅤ</div></div></div>'
        },
        'TV_SENADO_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_3.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 3ㅤ</div></div></div>'
        },
        'TV_SENADO_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_4.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 4ㅤ</div></div></div>'
        },
        'TV_SENADO_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_5.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 5ㅤ</div></div></div>'
        },
        'TV_SENADO_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_TVSenado_Señal_6.svg">',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalTVSENADO_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTV SENADO - SEÑAL 6ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_1': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCcULnWuDzgQG9yF0Dv3DIgg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 1ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_3': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF6KgLfQqQzekn8U1DwVs9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 3ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_5': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC0QKtI8NpeMObauDylsSUDA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 5ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_6': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCspWzpGflwb6A8PZqWw49CQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 6ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_7': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 7ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_8': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCyVjDDBZGDywVGrpGBvGEsw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 8ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_11': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 11',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCYPKjGKq2yLbAnmth5rFZmQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 11ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_12': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 12',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVOWFY-sgbDglBsfOap9okg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 12ㅤ</div></div></div>'
        },
        'DIPUTADOS_YouTube_13': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠDIPUTADOS 13',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC33MG3YdoQ16a8a3wODh6lw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤDIPUTADOS - SEÑAL 13ㅤ</div></div></div>'
        },



        'PoderJudicialTV_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 1ㅤ</div></div></div>'
        },
        'PoderJudicialTV_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_2.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 2ㅤ</div></div></div>'
        },
        'PoderJudicialTV_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_3.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 3ㅤ</div></div></div>'
        },
        'PoderJudicialTV_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_4.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 4ㅤ</div></div></div>'
        },
        'PoderJudicialTV_5': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 5',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_5.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 5ㅤ</div></div></div>'
        },
        'PoderJudicialTV_6': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 6',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_6.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 6ㅤ</div></div></div>'
        },
        'PoderJudicialTV_7': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 7',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_7.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 7ㅤ</div></div></div>'
        },
        'PoderJudicialTV_8': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_PoderJudicialTV.svg"></img>ﾠSEÑAL 8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalPoderJudicial_8.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPODER JUDICIAL - SEÑAL 8ㅤ</div></div></div>'
        },



        
        
        
        'PARQUEMET_CUMBRE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPARQUEMET CUMBRE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_CUMBRE_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSTGO. PARQUEMET CUMBREㅤ</div></div></div>'
        },
        'PARQUEMET_TERRAZA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPARQUEMET TERRAZA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMPARQUEMET_TERRAZA_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSTGO. PARQUEMET TERRAZAㅤ</div></div></div>'
        },
        'PLAZAITALIA_CIMA': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPLAZA ITALIA (Galeria Cima)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_PLAZA_ITALIA_CIMA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPLAZA ITALIAㅤ</div></div></div>'
        },
        'LEDRIUM_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠPROVIDENCIA (Ledrium)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_LEDRIUM_PROVIDENCIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤPROVIDENCIAㅤ</div></div></div>'
        },
        'LEDRIUM_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠLEDRIUM (CAM MAS RECIENTE)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCTDewuGhfwGv6JRNnqa-yXw&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLEDRIUM CAMㅤ</div></div></div>'
        },
        'OSORNO_1': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠOSORNO (OP1)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCwsMrFLSR2_wospO1MaGsaQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOSORNOㅤ</div></div></div>'
        },
        'OSORNO_2': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠOSORNO (OP2)',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCD7sqegDNyZxmdnCj6xqH6g&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOSORNOㅤ</div></div></div>'
        },
        'VALPARAISO': {
            'nombre': '<span style="margin-right: 10px; color: #FF4900" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/cl.svg"></img>ﾠVALPARAISO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_VALPARAISO.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVALPARAISOㅤ</div></div></div>'
        },
        'CAPITOLIO_EEUU_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠCAPITOLIO EEUU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_CAPITOLIO_EEUU.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCAPITOLIO EEUUㅤ</div></div></div>'
        },
        'NYC_Brooklyn_Bridge': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠNYC BROOKLYN BRIDGE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KGuCGd726RA?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/KGuCGd726RA" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤNYC BROOKLYN BRIDGEㅤ</div></a></div>'
        },
        'Lower_Manhattan_New_York_Harbor': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠNYC LOWER MANHATTAN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Vj0XKu6AoOw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/Vj0XKu6AoOw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤNYC LOWER MANHATTAN & NEW YORK HARBORㅤ</div></a></div>'
        },
        'Times_Square_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/AdUw5RdyZxI?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/AdUw5RdyZxI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUAREㅤ</div></a></div>'
        },
        'Times_Square_2_DUFFY_SQUARE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mNawBricEYw?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/mNawBricEYw" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: DUFFY SQUAREㅤ</div></a></div>'
        },
        'Times_Square_3_EXPRESS_VIEW': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6dtpPYTQaSQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/OBmXqlPxtAQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: EXPRESS VIEWㅤ</div></a></div>'
        },
        'Times_Square_4_1560_BROADWAY': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/us.svg"></img>ﾠTIMES SQUARE 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/rZjblGbbCmE?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/4qyZLflp-sI" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTIMES SQUARE: 1540 BROADWAYㅤ</div></a></div>'
        },
        'Four_Seasons_Hotel_Buenos_Aires': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠFOUR SEASONS HOTEL BS.As',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/if91GyWP3zQ?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/if91GyWP3zQ" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤFOUR SEASONS HOTEL BUENOS AIRESㅤ</div></a></div>'
        },
        'Ushuaia': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/ar.svg"></img>ﾠUSHUAIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalCAMARA_USHUAIA.html" frameborder="0"></iframe><a href="" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤUSHUAIAㅤ</div></a></div>'
        },
        'Tokio_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">photo_camera</span><img style="height: 15px; width:auto:" src="https://flagcdn.com/jp.svg"></img>ﾠTOKYO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/QOjmvL3e7Lc?autoplay=true&mute=1" frameborder="0"></iframe><a href="https://youtu.be/QOjmvL3e7Lc" class="FondoTitulosMonitor1"><div class="TextoTitulosMonitor1 waves-effect waves-gris">ㅤTOKYOㅤ</div></a></div>'
        },



        //REGIONALES
        'ARICA_ARICA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARICA | ARICA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARICA_ARICA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARICA - ARICA TVㅤ</div></div></div>'
        },
        'ARICA_CAPPISSIMA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARICA | CAPPISSIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARICA_CAPPISSIMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARICA - CAPPISSIMA TVㅤ</div></div></div>'
        },
        'TARAPACA_IQUIQUE_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>TARAPACA | IQUIQUE TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/TARAPACA_IQUIQUE_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤTARAPACA - IQUIQUE TVㅤ</div></div></div>'
        },
        'ANTOFAGASTA_ANTOFAGASTA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | ANTOFAGASTA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_ANTOFAGASTA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - ANTOFAGASTA TVㅤ</div></div></div>'
        },
        'ANTOFAGASTA_LRP_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | LRP TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_LRP_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - LRP TVㅤ</div></div></div>'
        },
        'ANTOFAGASTA_AM_CANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | AM CANAL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_AM_CANAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - AM CANALㅤ</div></div></div>'
        },
        'ANTOFAGASTA_TALTAL_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ANTOFAGASTA | TALTAL TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ANTOFAGASTA_TALTAL_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤANTOFAGASTA - TALTAL TVㅤ</div></div></div>'
        },
        'ATACAMA_ATACAMA TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ATACAMA | ATACAMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ATACAMA_ATACAMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤATACAMA - ATACAMA TVㅤ</div></div></div>'
        },
        'ATACAMA_HOLVOET_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ATACAMA | HOLVOET TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ATACAMA_HOLVOET_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤATACAMA - HOLVOET TVㅤ</div></div></div>'
        },
        'COQUIMBO_MIRADIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>COQUIMBO | MI RADIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/COQUIMBO_MIRADIO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOQUIMBO - MI RADIO TVㅤ</div></div></div>'
        },
        'VALPARAISO_VALPARAISO_QUINTA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>VALPARAISO | QUINTA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/VALPARAISO_QUINTA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVALPARAISO - QUINTA TVㅤ</div></div></div>'
        },
        'VALPARAISO_VALPARAISO_VTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>VALPARAISO | VTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/VALPARAISO_VTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVALPARAISO - VTVㅤ</div></div></div>'
        },
        'METROPOLITANA_STGO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>RM | STGO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/METROPOLITANA_STGO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRM - STGO TVㅤ</div></div></div>'
        },
        'OHIGGINS_TELECANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>OHIGGINS | TELECANAL STA. CRUZ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/OHIGGINS_TELECANAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOHIGGINS - TELECANAL STA. CRUZㅤ</div></div></div>'
        },
        'MAULE_CAMPUS_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | CAMPUS UTALCA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_CAMPUS_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - CAMPUS UTALCA TVㅤ</div></div></div>'
        },
        'MAULE_TELECANAL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | TELECANAL TALCA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TELECANAL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - TELECANAL TALCAㅤ</div></div></div>'
        },
        'MAULE_CONTIVISION': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | CONTIVISION',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_CONTIVISION.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - CONTIVISIONㅤ</div></div></div>'
        },
        'MAULE_TV5_LINARES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | TV5 LINARES',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TV5LINARES.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - TV5 LINARESㅤ</div></div></div>'
        },
        'MAULE_TV_MAULESUR': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | TV MAULE SUR',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_TVMAULESUR.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - TV MAULE SURㅤ</div></div></div>'
        },
        'MAULE_UTV_SANCLEMENTE': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAULE | UTV SANCLEMENTE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAULE_UTVSANCLEMENTE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAULE - UTV SANCLEMENTEㅤ</div></div></div>'
        },
        'BIOBIO_CANAL9_BIOBIO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | CANAL 9 BIOBIO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_CANAL9BIOBIOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - CANAL 9 BIOBIO TVㅤ</div></div></div>'
        },
        'BIOBIO_TVU': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | TVU',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_TVU.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - TVUㅤ</div></div></div>'
        },
        'BIOBIO_TV8': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | TV8',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_TV8.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - TV8ㅤ</div></div></div>'
        },
        'BIOBIO_ENERGIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BIOBIO | ENERGIA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/BIOBIO_ENERGIATV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBIOBIO - ENERGIA TVㅤ</div></div></div>'
        },
        'ARAUCANIA_TEMUCO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | TEMUCO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_TEMUCO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARAUCANIA - TEMUCO TVㅤ</div></div></div>'
        },
        'ARAUCANIA_LTV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | LTV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_LTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARAUCANIA - LTVㅤ</div></div></div>'
        },
        'ARAUCANIA_PUCON_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | PUCON TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_PUCONTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARAUCANIA - PUCON TVㅤ</div></div></div>'
        },
        'ARAUCANIA_TELEANGOL': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>ARAUCANIA | TELEANGOL',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/ARAUCANIA_TELEANGOL.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARAUCANIA - TELEANGOLㅤ</div></div></div>'
        },
        'LOS_LAGOS_OSORNO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | OSORNO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_OSORNO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - OSORNO TVㅤ</div></div></div>'
        },
        'LOS_LAGOS_TVINET': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | TV INET',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_TVINET.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - TV INETㅤ</div></div></div>'
        },
        'LOS_LAGOS_CANAL5_PTO_MONTT': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | CANAL 5 PUERTO MONTT',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_CANAL5_PTOMONTT.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - CANAL 5 PUERTO MONTTㅤ</div></div></div>'
        },
        'LOS_LAGOS_DECIMA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | DECIMA TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_DECIMA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - DECIMA TVㅤ</div></div></div>'
        },
        'LOS_LAGOS_CANAL2_QUELLON': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>LOS LAGOS | CANAL 2 QUELLON',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/LOS_LAGOS_CANAL2_QUELLON.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLOS LAGOS - CANAL 2 QUELLONㅤ</div></div></div>'
        },
        'AYSEN_ROCCO_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | ROCCO TV COYHAIQUE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_ROCCOTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAYSEN - ROCCO TVㅤ</div></div></div>'
        },
        'AYSEN_SANTAMARIA_TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | SANTA MARIA TV COYHAIQUE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_SANTAMARIA_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAYSEN - SANTA MARIA TVㅤ</div></div></div>'
        },
        'AYSEN_CANAL11_AYSEN': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | CANAL 11 PUERTO AYSEN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_CANAL11.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAYSEN - CANAL 11ㅤ</div></div></div>'
        },
        'AYSEN_AYSEN TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>AYSEN | AYSEN TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/AYSEN_AYSENTV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤAYSEN - AYSEN TVㅤ</div></div></div>'
        },
        'MAGALLANES_ITV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAGALLANES | ITV PATAGONIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAGALLANES_ITV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAGALLANES - ITV PATAGONIAㅤ</div></div></div>'
        },
        'MAGALLANES_PINGUINO TV': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>MAGALLANES | PINGUINO TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/REGIONALES/MAGALLANES_PINGUINO_TV.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤMAGALLANES - PINGUINO TVㅤ</div></div></div>'
        }, 


        //SISMOS
        'EARLY_EST_DETEC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ALOMAX.svg"></img>ﾠDETECTOR SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_DETECTOR.html" frameborder="0" scrolling="no"></iframe></div>'
        },
        'EARLY_EST_SIS': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ALOMAX.svg"></img>ﾠULTIMOS SISMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="MonitorEARLY-EST_SISMOS.html" frameborder="0"></iframe></div>'
        },

        //ESPACIO
        'NASA_TV_PUBLIC': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVPUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_MEDIA': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATVMEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'ISS_SD': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalISS_SD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS SDㅤ</div></div></div>'
        },
        'ISS_HD': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalISS_HD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS HDㅤ</div></div></div>'
        },
        'ISS_TRACKER': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_ESA.svg"></img>ﾠISS TRACKER MAP 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalISS_TRACKER.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_3': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 3',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_2_2.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'ISS_TRACKER_4': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Icono_Ubicacion.svg"></img>ﾠISS TRACKER MAP 4',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="ESPACIO_RASTREO_ISS_3.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'NASA_Wallops': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA WALLOPS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_Wallops.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA WALLOPSㅤ</div></div></div>'
        },
        'NASA_VIDEO': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA VIDEO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC_aP7p621ATY_yAa8jMqUVA&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_PUBLIC2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_TV_MEDIA2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'ISS_SD2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM SD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSSD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS SDㅤ</div></div></div>'
        },
        'ISS_HD2': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠISS CAM HD',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_ISSHD.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS HDㅤ</div></div></div>'
        },
        'ESA_1': {
            'nombre': '<img style="height: 20px; width:auto:" src="imagenes/Logo_ESA.svg"></img>ﾠESA WEB TV 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalESATV_1.html" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤESA WEB TV 1ㅤ</div></div></div>'
        },
        'ROSCOSMOS': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_ROSCOSMOS.svg"></img>ﾠROSCOSMOS',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCOcpUgXosMCIlOsreUfNFiA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤISS TRACKERㅤ</div></div></div>'
        },
        'NASA_YT_PUBLIC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV PUBLIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_PUBLIC_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV PUBLICㅤ</div></div></div>'
        },
        'NASA_YT_MEDIA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠNASA TV MEDIA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_MEDIA_YOUTUBE.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA TV MEDIAㅤ</div></div></div>'
        },
        'NASA_YT_KSC': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<img style="height: 20px; width:auto:" src="imagenes/Logo_NASA.svg"></img>ﾠKENNEDY SPACE CENTER',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="SeñalNASATV_KSC.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA KENNEDY SPACE CENTERㅤ</div></div></div>'
        },
        'SPACEX': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>SPACEX',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCtI0Hodo5o5dUb67FeUjDeA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEXㅤ</div></div></div>'
        },
        'BLUE_ORIGIN': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>BLUE ORIGIN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCVxTHEKKLxNjGcvVaZindlg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤBLUE ORIGINㅤ</div></div></div>'
        },
        'ULA': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>ULA',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCnrGPRKAg1PgvuSHrRIl3jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤULAㅤ</div></div></div>'
        }, 
        'ARIANESPACE': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>ARIANESPACE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCRn9F2D9j-t4A-HgudM7aLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤARIANESPACEㅤ</div></div></div>'
        },
        'Rocket_Lab': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>ROCKET LAB',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCsWq7LZaizhIi-c-Yo_bcpw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEXㅤ</div></div></div>'
        }, 
        'Virgin_Galactic': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>VIRGIN GALACTIC',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UClcvOr7LV8tlJwJvkNMmnKg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤVirgin Galacticㅤ</div></div></div>'
        },
        'CGTN': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>CGTN',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCgrNz-aDmcr2uuto8_DL2jg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCGTNㅤ</div></div></div>'
        },
        'RDRONE_UY_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>RDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC2BCLTaBqFwyc3CZlkEHg_Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_YouTube': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>SPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCxjGXSXK3Ss-mkiZ-wYtjtg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'NASASpaceflight': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>NASASpaceflight ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCSUu1lih2RifWkKtDOJdsBA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNASA Spaceflightㅤ</div></div></div>'
        },
        'EverydayAstronaut': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>EVERYDAY ASTRONAUT ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC6uKrU_WqJ1R2HMTY3LIx5Q&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤEVERY ASTRONAUTㅤ</div></div></div>'
        },
        'FronteraEspacial': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>FRONTERA ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCurxSOUxQszWp-5juh48wmg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤFRONTERA ESPACIALㅤ</div></div></div>'
        },
        'ConexionEspacial': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠ<span style="margin-right: 10px;" class="material-icons">tv</span>CONEXION ESPACIAL ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCS6DjxV3L8XdnGa70ZxS_FA&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCONEXION ESPACIALㅤ</div></div></div>'
        }, 
        '321LAUNCH_CAM': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>321LAUNCH CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCUccOGcvTNrJuihXhYsrp7w&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤ321LAUNCH CAMㅤ</div></div></div>'
        },
        'Spaceflight Now': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SPACEFLIGHT NOW',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoLdERT4-TJ82PJOHSrsZLQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEFLIGHT NOWㅤ</div></div></div>'
        }, 
        'ComoSapiens': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>COSMOSAPIENS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UC3ZODI-xZfdPanPP6tKUg9g&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOSMOSAPIENSㅤ</div></div></div>'
        }, 
        'InfiniteSpace': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>INFINITE SPACE ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCn8SmzG1xXx_inu-XADxcMg&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤINFINITE SPACEㅤ</div></div></div>'
        },
        'SpaceXMissions': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SPACEX MISSIONS ',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCE_z1X3v8ZdBNHn9IFHBfNw&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX MISSIONSㅤ</div></div></div>'
        },
        'OceanCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>OCEAN CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCF8IYFF60clbbznjvJ7qoTQ&autoplay=true&mute=1" frameborder="0" allowfullscreen></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤOCEAN CAMㅤ</div></div></div>'
        }, 
        'LabPadre_LabCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>LAB CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/LabCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤLAB CAMㅤ</div></div></div>'
        }, 
        'LabPadre_RoverCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>ROVER CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/RoverCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤROVER CAMㅤ</div></div></div>'
        }, 
        'LabPadre_NerdleCam4K': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>Nerdle Cam 4K',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/NerdleCam4K.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤNERDLE CAMㅤ</div></div></div>'
        }, 
        'LabPadre_SapphireCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SAPPHIRE CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SapphireCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSAPPHIRE CAMㅤ</div></div></div>'
        }, 
        'LabPadre_SentinelCam': {
            'nombre': '<img style="height: 15px; width:auto; margin-right: 10px;" src="imagenes/Logo_YT.svg"></img><span style="margin-right: 10px;" class="material-icons">photo_camera</span>SENTINEL CAM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Senal/LabPadre/SentinelCam.html" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSENTINEL CAMㅤ</div></div></div>'
        },
        'RDRONE_UY_Twitch': {
            'nombre': '<img style="height: 20px; width:auto; margin-right: 10px;" src="imagenes/Logo_Twitch.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>RDRONE UY',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=rdroneuy&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤRDRONE UYㅤ</div></div></div>'
        },
        'SPACEX_STORM_Twitch': {
            'nombre': '<img style="height: 20px; width:auto; margin-right: 10px;" src="imagenes/Logo_Twitch.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>SPACEX STORM',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=spacexstorm&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤSPACEX STORMㅤ</div></div></div>'
        },
        'COPANO_Twitch': {
            'nombre': '<img style="height: 20px; width:auto; margin-right: 10px;" src="imagenes/Logo_Twitch.svg"></img><span style="margin-right: 10px;" class="material-icons">tv</span>COPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://player.twitch.tv/?channel=copano&parent=ainmcl.github.io" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOPANOㅤ</div></div></div>'
        },
        'Copano_YT': {
            'nombre': '<img style="height: 15px; width:auto:" src="imagenes/Logo_YT.svg"></img>ﾠCOPANO',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/live_stream?channel=UCoMBIlBDtaxuqUfTLzV6PDQ&autoplay=true&mute=1" frameborder="0"></iframe><div class="CAJATituloDePantallaPequeña2"><div class="TextoTitulosMonitor1">ㅤCOPANOㅤ</div></div></div>'
        },
        'Barras_1': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'Barras_3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">tv</span>BARRAS 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <img class="embed-responsive-item" src="imagenes/SinSeñal.png" frameborder="0"></img></div>'
        },
        'RELOJES': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">schedule</span>RELOJES CHILE',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_CHILE.html" frameborder="0"></iframe></div>'
        },
        'RELOJES2': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">schedule</span>RELOJES INTERNACIONAL 1',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_INTERNACIONAL_1.html" frameborder="0"></iframe></div>'
        },
        'RELOJES3': {
            'nombre': '<span style="margin-right: 10px;" class="material-icons">schedule</span>RELOJES INTERNACIONAL 2',
            'code': '<div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="Reloj_Pantalla_INTERNACIONAL_2.html" frameborder="0"></iframe></div>'
        },
    },
    add: function(canal) {
        if (App.channels[canal]) {
    var thisCanal = document.createElement("div");
    thisCanal.innerHTML = App.channels[canal].code;

    if (App.isMobile()) {
        thisCanal.classList.add("col-" + sizeMobile);
    } else {
        thisCanal.classList.add("col-" + size);
    }
    thisCanal.classList.add("stream");
    thisCanal.setAttribute("data-canal", canal);
    var losCanales = document.getElementById("los-canales");
    losCanales.appendChild(thisCanal);
    var n = document.querySelector('button[data-canal="' + canal + '"]');
    n.classList.remove("BotonTV_Señales");
    n.classList.add("BotonTV_SeñalSeleccionada");
}
    },
remove: function(canal) {
    var findCanal = document.querySelector('div[data-canal="' + canal + '"]');
    var losCanales = document.getElementById("los-canales");
    if (findCanal != null) {
        losCanales.removeChild(findCanal);
        var n = document.querySelector('button[data-canal="' + canal + '"]');
        n.classList.remove("BotonTV_SeñalSeleccionada");
        n.classList.add("BotonTV_Señales");
    }
},
isMobile: function() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
},

seedModal: function() {
    for (const llave in App.channels) {
        let buttonTV;
        buttonTV = document.createElement("button");
        buttonTV.classList.add("btn");
        buttonTV.classList.add("BotonTV_Señales");
        buttonTV.setAttribute("data-canal", llave);
        buttonTV.innerHTML = App.channels[llave].nombre;
        let n = document.querySelector(".modal-body");
        n.appendChild(buttonTV);
        buttonTV.addEventListener("click", function () {
            if (buttonTV.getAttribute("class").includes("BotonTV_Señales")) {
                App.add(llave);
            } else if (buttonTV.getAttribute("class").includes("BotonTV_SeñalSeleccionada")) {
                App.remove(llave);
            }
        })
    };
},

init: function() {
    App.seedModal();
    App.add("cima");
    if (!App.isMobile()) {
        App.add("24HTVN");
        App.add("MEGANOTICIAS");
        App.add("T13_WEB_IFRAME");

        App.add("CHV_WEB_IFRAME");
        App.add("TVN_WEB_IFRAME");
        App.add("CANAL13_WEB_IFRAME");
        
        
        
    }
}
};

App.init();

var modal = document.getElementById("custom-modal");
var btn = document.getElementById("custom-btn");
var span = document.getElementById("custom-close");
var span2 = document.getElementById("custom-close2");


var hue = document.getElementById("Stream_por_fila");

hue.onchange = function (event) {
    size = event.target.value
    sizeMobile = event.target.value
    let canal2 = document.querySelectorAll(".stream");
    for (let videos of canal2) {
        videos.classList.remove("col-12", "col-6", "col-4", "col-3", "col-2");
        videos.classList.add("col-" + event.target.value);
    }
}

btn.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

span2.onclick = function () {
    modal.style.display = "none";
}

var anchoStreams = document.getElementById("Tamaño_streams");

anchoStreams.oninput = function (event) {
    let streams2 = document.getElementById("los-canales");
    streams2.style.maxWidth = event.target.value + "%"
}
