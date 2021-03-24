import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import DetailProduct from './Detail';
import ProductDetail from './Product';
import motorola from '../motorola.jpeg'

const MainLayout = () => {
const datalle = {
"id": "MCO610021282",
"site_id": "MCO",
"title": "Motorola One Fusion Dual Sim 64 Gb Verde Esmeralda 4 Gb Ram",
"seller": {
    "id": 530380977,
    "permalink": null,
    "registration_date": null,
    "car_dealer": false,
    "real_estate_agency": false,
    "tags": null
},
"price": 579900,
"prices": {
    "id": "MCO610021282",
    "prices": [
        {
            "id": "2",
            "type": "standard",
            "conditions": {
                "context_restrictions": [],
                "start_time": null,
                "end_time": null,
                "eligible": true
            },
            "amount": 609900,
            "regular_amount": null,
            "currency_id": "COP",
            "exchange_rate_context": "DEFAULT",
            "metadata": {},
            "last_updated": "2021-03-02T18:11:13Z"
        },
        {
            "id": "3",
            "type": "promotion",
            "conditions": {
                "context_restrictions": [],
                "start_time": "2021-01-05T04:30:00Z",
                "end_time": "2022-02-01T04:59:00Z",
                "eligible": true
            },
            "amount": 579900,
            "regular_amount": 999900,
            "currency_id": "COP",
            "exchange_rate_context": "DEFAULT",
            "metadata": {
                "campaign_id": "MCO2298",
                "promotion_id": "MCO2298",
                "promotion_type": "campaign"
            },
            "last_updated": "2021-03-13T00:39:09Z"
        }
    ],
    "presentation": {
        "display_currency": "COP"
    },
    "payment_method_prices": []
},
"sale_price": null,
"currency_id": "COP",
"available_quantity": 1043,
"sold_quantity": 60,
"buying_mode": "buy_it_now",
"listing_type_id": "gold_special",
"stop_time": "2041-02-25T04:00:00.000Z",
"condition": "new",
"permalink": "https://www.mercadolibre.com.co/motorola-one-fusion-dual-sim-64-gb-verde-esmeralda-4-gb-ram/p/MCO16065465",
"thumbnail": "http://http2.mlstatic.com/D_709641-MLA44155886413_112020-I.jpg",
"thumbnail_id": "709641-MLA44155886413_112020",
"accepts_mercadopago": true,
"installments": {
    "quantity": 36,
    "amount": 16108.33,
    "rate": 0,
    "currency_id": "COP"
},
"address": {
    "state_id": "CO-DC",
    "state_name": "Bogotá D.C.",
    "city_id": "TUNPQ0NIQTk2OTI1",
    "city_name": "Chapinero"
},
"shipping": {
    "free_shipping": true,
    "mode": "me2",
    "tags": [
        "fulfillment",
        "mandatory_free_shipping"
    ],
    "logistic_type": "fulfillment",
    "store_pick_up": false
},
"seller_address": {
    "id": "",
    "comment": "",
    "address_line": "",
    "zip_code": "",
    "country": {
        "id": "CO",
        "name": "Colombia"
    },
    "state": {
        "id": "CO-DC",
        "name": "Bogotá D.C."
    },
    "city": {
        "id": "TUNPQ0NIQTk2OTI1",
        "name": "Chapinero"
    },
    "latitude": "",
    "longitude": ""
},
"attributes": [
    {
        "id": "BRAND",
        "value_id": "2503",
        "value_struct": null,
        "attribute_group_id": "OTHERS",
        "name": "Marca",
        "value_name": "Motorola",
        "values": [
            {
                "source": 1,
                "id": "2503",
                "name": "Motorola",
                "struct": null
            }
        ],
        "attribute_group_name": "Otros",
        "source": 1
    },
    {
        "value_struct": null,
        "values": [
            {
                "struct": null,
                "source": 6808261514773724,
                "id": null,
                "name": "Motorola One Fusión XT2073-2"
            }
        ],
        "attribute_group_id": "OTHERS",
        "attribute_group_name": "Otros",
        "source": 6808261514773724,
        "value_id": null,
        "value_name": "Motorola One Fusión XT2073-2",
        "id": "DETAILED_MODEL",
        "name": "Modelo detallado"
    },
    {
        "attribute_group_id": "OTHERS",
        "id": "GPU_MODEL",
        "name": "Modelo de GPU",
        "value_id": "7835941",
        "values": [
            {
                "source": 1,
                "id": "7835941",
                "name": "Adreno 616",
                "struct": null
            }
        ],
        "value_name": "Adreno 616",
        "value_struct": null,
        "attribute_group_name": "Otros",
        "source": 1
    },
    {
        "name": "Condición del ítem",
        "value_struct": null,
        "values": [
            {
                "id": "2230284",
                "name": "Nuevo",
                "struct": null,
                "source": 6808261514773724
            }
        ],
        "id": "ITEM_CONDITION",
        "value_id": "2230284",
        "value_name": "Nuevo",
        "attribute_group_id": "OTHERS",
        "attribute_group_name": "Otros",
        "source": 6808261514773724
    },
    {
        "name": "Línea",
        "value_struct": null,
        "attribute_group_id": "OTHERS",
        "attribute_group_name": "Otros",
        "source": 1,
        "id": "LINE",
        "value_name": "One",
        "values": [
            {
                "id": "51851",
                "name": "One",
                "struct": null,
                "source": 1
            }
        ],
        "value_id": "51851"
    },
    {
        "name": "Modelo",
        "values": [
            {
                "name": "One Fusion Dual SIM",
                "struct": null,
                "source": 1,
                "id": "8948015"
            }
        ],
        "attribute_group_name": "Otros",
        "id": "MODEL",
        "value_id": "8948015",
        "value_name": "One Fusion Dual SIM",
        "value_struct": null,
        "attribute_group_id": "OTHERS",
        "source": 1
    },
    {
        "id": "PACKAGE_LENGTH",
        "name": "Largo del paquete",
        "value_id": null,
        "value_struct": {
            "number": 8.8,
            "unit": "cm"
        },
        "attribute_group_name": "Otros",
        "value_name": "8.8 cm",
        "values": [
            {
                "source": 1,
                "id": null,
                "name": "8.8 cm",
                "struct": {
                    "number": 8.8,
                    "unit": "cm"
                }
            }
        ],
        "attribute_group_id": "OTHERS",
        "source": 1
    },
    {
        "value_struct": {
            "number": 400,
            "unit": "g"
        },
        "values": [
            {
                "id": null,
                "name": "400 g",
                "struct": {
                    "number": 400,
                    "unit": "g"
                },
                "source": 1
            }
        ],
        "attribute_group_name": "Otros",
        "source": 1,
        "id": "PACKAGE_WEIGHT",
        "name": "Peso del paquete",
        "value_id": null,
        "value_name": "400 g",
        "attribute_group_id": "OTHERS"
    },
    {
        "name": "Modelo del procesador",
        "value_struct": null,
        "attribute_group_id": "OTHERS",
        "source": 1,
        "id": "PROCESSOR_MODEL",
        "value_id": "7862059",
        "value_name": "Snapdragon 710",
        "values": [
            {
                "id": "7862059",
                "name": "Snapdragon 710",
                "struct": null,
                "source": 1
            }
        ],
        "attribute_group_name": "Otros"
    },
    {
        "value_id": "2595404",
        "values": [
            {
                "id": "2595404",
                "name": "205 g",
                "struct": {
                    "number": 205,
                    "unit": "g"
                },
                "source": 1
            }
        ],
        "attribute_group_name": "Otros",
        "source": 1,
        "id": "WEIGHT",
        "value_name": "205 g",
        "value_struct": {
            "number": 205,
            "unit": "g"
        },
        "attribute_group_id": "OTHERS",
        "name": "Peso"
    }
],
"original_price": 999900,
"category_id": "MCO1055",
"official_store_id": 186,
"domain_id": "MCO-CELLPHONES",
"catalog_product_id": "MCO16065465",
"tags": [
    "good_quality_picture",
    "immediate_payment",
    "cart_eligible",
    "shipping_guaranteed"
],
"catalog_listing": true,
"use_thumbnail_id": true,
"order_backend": 1
}

  return ( 
    <div className="App">
      <Navbar></Navbar>
      <DetailProduct></DetailProduct>
    </div>
)}

export default MainLayout