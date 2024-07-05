import React from 'react'

//funcion para DesEncriptar la clave

export function EscriptarJs(Llave, Cadena) {

    var i;

    //if (Llave == 0) { var Llave = "Smatacentral" }

    var txtEncript = ""
    var cadenaencript = ""
    var llaveencript = ""
    var asciicode = ""

    //console.log("len: " + Cadena.length)

    for (i = 0; i < Cadena.length; i++) {

        cadenaencript = Cadena.substring(i);        
        llaveencript = Llave.substring(i);

        //console.log(cadenaencript + "," + llaveencript);

        if (isNaN(cadenaencript.charCodeAt(0))) {

            console.log("isnan: " + cadenaencript)

        } else {

            
            asciicode = parseInt(cadenaencript.charCodeAt(0) + llaveencript.charCodeAt(0))


            switch (asciicode) {
                
                case 128:
                    asciicode = 8364;
                    break;
                case 129:
                    asciicode = 129;
                    break;
                case 130:
                    asciicode = 8218;
                    break;
                case 131:
                    asciicode = 402;
                    break;
                case 132:
                    asciicode = 132//8222;
                    break;
                case 133:
                    asciicode = 8230;
                    break;
                case 134:
                    asciicode = 8224;
                    break;
                case 135:
                    asciicode = 8225;
                    break;
                case 136:
                    asciicode = 710;
                    break;
                case 137:
                    asciicode = 8240;
                    break;
                case 138:
                    asciicode = 352;
                    break;
                case 139:
                    asciicode = 8249;
                    break;
                case 140:
                    asciicode = 338;
                    break;
                case 141:
                    asciicode = 141;
                    break;
                case 142:
                    asciicode = 381;
                    break;
                case 143:
                    asciicode = 143;
                    break;
                case 144:
                    asciicode = 144;
                    break;
                case 145:
                    asciicode = 8216;
                    break;
                case 146:
                    asciicode = 8217;
                    break;
                case 147:
                    asciicode = 8220;
                    break;
                case 148:
                    asciicode = 8221;
                    break;
                case 149:
                    asciicode = 8226;
                    break;
                case 150:
                    asciicode = 8211;
                    break;
                case 151:
                    asciicode = 8212;
                    break;
                case 152:
                    asciicode = 732;
                    break;
                case 153:
                    asciicode = 8482;
                    break;
                case 154:
                    asciicode = 353;
                    break;
                case 155:
                    asciicode = 8250;
                    break;
                case 156:
                    asciicode = 339;
                    break;
                case 157:
                    asciicode = 157;
                    break;
                case 158:
                    asciicode = 382;
                    break;
                case 159:
                    asciicode = 376;
                    break;
                default:
                    asciicode = asciicode;
                    break;
            }

            txtEncript = txtEncript + String.fromCharCode(asciicode)                        
        }
    }

    
    return txtEncript
    
    
}


