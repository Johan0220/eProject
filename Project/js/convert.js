
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    //Length
    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = input.value;
    } else if (inputTypeValue === "meter" && resultTypeValue === "yard") {
        result.value = Number(input.value) * 1.0936133;
    } else if (inputTypeValue === "meter" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 39.3700787;
    } else if (inputTypeValue === "meter" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 3.2808399;
    } else if (inputTypeValue === "meter" && resultTypeValue === "mile") {
        result.value = Number(input.value) / 1609.344;
    } else if (inputTypeValue === "meter" && resultTypeValue === "millimeter") {
        result.value = Number(input.value) * 1000;
    }

    if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value = input.value;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "yard") {
        result.value = Number(input.value) * 1093.6133;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 39370.0787;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 3280.8399;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "mile") {
        result.value = Number(input.value) / 1.609344;
    } else if (inputTypeValue === "kilometer" && resultTypeValue === "millimeter") {
        result.value = Number(input.value) * 1000000;
    }

    if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) / 100000;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        result.value = input.value;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "yard") {
        result.value = Number(input.value) / 91.44;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "inch") {
        result.value = Number(input.value) / 2.54;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "feet") {
        result.value = Number(input.value) / 30.48;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "mile") {
        result.value = Number(input.value) / 160934.4;
    } else if (inputTypeValue === "centimeter" && resultTypeValue === "millimeter") {
        result.value = Number(input.value) * 10;
    }

    if (inputTypeValue === "yard" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) / 1093.6133;
    } else if (inputTypeValue === "yard" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 91.44;
    } else if (inputTypeValue === "yard" && resultTypeValue === "meter") {
        result.value = Number(input.value) / 1.0936133;
    } else if (inputTypeValue === "yard" && resultTypeValue === "yard") {
        result.value = input.value;
    } else if (inputTypeValue === "yard" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 36;
    } else if (inputTypeValue === "yard" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 3;
    } else if (inputTypeValue === "yard" && resultTypeValue === "mile") {
        result.value = Number(input.value) / 1760;
    } else if (inputTypeValue === "yard" && resultTypeValue === "millimeter") {
        result.value = Number(input.value) * 914.4;
    }

    if (inputTypeValue === "inch" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) / 39370.0787;
    } else if (inputTypeValue === "inch" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 2.54;
    } else if (inputTypeValue === "inch" && resultTypeValue === "meter") {
        result.value = Number(input.value) / 39.3700787;
    } else if (inputTypeValue === "inch" && resultTypeValue === "yard") {
        result.value = Number(input.value) / 36;
    } else if (inputTypeValue === "inch" && resultTypeValue === "inch") {
        result.value = input.value;
    } else if (inputTypeValue === "inch" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 0.833333333;
    } else if (inputTypeValue === "inch" && resultTypeValue === "mile") {
        result.value = Number(input.value) / 63360;
    } else if (inputTypeValue === "inch" && resultTypeValue === "millimeter") {
        result.value = Number(input.value) * 25.4;
    }

    if (inputTypeValue === "feet" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) / 3280.8399;
    } else if (inputTypeValue === "feet" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 30.48;
    } else if (inputTypeValue === "feet" && resultTypeValue === "meter") {
        result.value = Number(input.value) / 3.2808399;
    } else if (inputTypeValue === "feet" && resultTypeValue === "yard") {
        result.value = Number(input.value) / 3;
    } else if (inputTypeValue === "feet" && resultTypeValue === "inch") {
        result.value = Number(input.value) / 0.833333333;
    } else if (inputTypeValue === "feet" && resultTypeValue === "feet") {
        result.value = input.value;
    } else if (inputTypeValue === "feet" && resultTypeValue === "mile") {
        result.value = Number(input.value) / 5280;
    } else if (inputTypeValue === "feet" && resultTypeValue === "millimeter") {
        result.value = Number(input.value) * 304.8;
    }

    if (inputTypeValue === "mile" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 1.609344;
    } else if (inputTypeValue === "mile" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 160934.4;
    } else if (inputTypeValue === "mile" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1609.344;
    } else if (inputTypeValue === "mile" && resultTypeValue === "yard") {
        result.value = Number(input.value) * 1760;
    } else if (inputTypeValue === "mile" && resultTypeValue === "inch") {
        result.value = Number(input.value) * 63360;
    } else if (inputTypeValue === "mile" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 5280;
    } else if (inputTypeValue === "mile" && resultTypeValue === "mile") {
        result.value = input.value;
    } else if (inputTypeValue === "mile" && resultTypeValue === "millimeter") {
        result.value = Number(input.value) * 1609344;
    }

    if (inputTypeValue === "millimeter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) / 10;
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "meter") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "yard") {
        result.value = Number(input.value) / 914.4;
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "inch") {
        result.value = Number(input.value) / 25.4;
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "feet") {
        result.value = Number(input.value) / 304.8;
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "mile") {
        result.value = Number(input.value) / 1609344;
    } else if (inputTypeValue === "millimeter" && resultTypeValue === "millimeter") {
        result.value = input.value;
    }

    //Square
    if (inputTypeValue === "meter2" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) * 10000;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "meter2") {
        result.value = input.value;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "yard2") {
        result.value = Number(input.value) * 1.19599005;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "inch2") {
        result.value = Number(input.value) * 1550.0031;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "feet2") {
        result.value = Number(input.value) * 10.7639104;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 2589988.11;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "meter2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) / 10000;
    }

    if (inputTypeValue === "kilometer2" && resultTypeValue === "kilometer2") {
        result.value = input.value;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) * 10000000000;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "meter2") {
        result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "yard2") {
        result.value = Number(input.value) * 1195990.05;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "inch2") {
        result.value = Number(input.value) * 1550003100;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "feet2") {
        result.value = Number(input.value) * 10763910.4;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 2.58998811;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 1000000000000;
    } else if (inputTypeValue === "kilometer2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) * 100;
    }

    if (inputTypeValue === "centimeter2" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) / 10000000000;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "centimeter2") {
        result.value = input.value;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "meter2") {
        result.value = Number(input.value) * 10000;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "yard2") {
        result.value = Number(input.value) / 8361.2736;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "inch2") {
        result.value = Number(input.value) / 6.4516;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "fee2t") {
        result.value = Number(input.value) / 929.0304;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 25899881100;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 100;
    } else if (inputTypeValue === "centimeter2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) / 100000000;
    }

    if (inputTypeValue === "yard2" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) / 1195990.05;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) * 8361.2736;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "meter2") {
        result.value = Number(input.value) / 1.19599005;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "yard2") {
        result.value = input.value;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "inch2") {
        result.value = Number(input.value) * 1269;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "feet2") {
        result.value = Number(input.value) * 9;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 3097600;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 836127.36;
    } else if (inputTypeValue === "yard2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) / 11959.9005;
    }

    if (inputTypeValue === "inch2" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) / 1550003100;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) * 6.4516;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "meter2") {
        result.value = Number(input.value) / 1550.0031;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "yard2") {
        result.value = Number(input.value) / 1269;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "inch2") {
        result.value = input.value;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "feet2") {
        result.value = Number(input.value) / 144;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 4014489600;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 645.16;
    } else if (inputTypeValue === "inch2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) / 15500031;
    }

    if (inputTypeValue === "feet2" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) * 10763910.4;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) * 929.0304;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "meter2") {
        result.value = Number(input.value) / 10.7639104;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "yard2") {
        result.value = Number(input.value) / 9;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "inch2") {
        result.value = Number(input.value) * 144;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "feet2") {
        result.value = input.value;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 27878400;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 92903.04;
    } else if (inputTypeValue === "feet2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) * 107639.104;
    }

    if (inputTypeValue === "mile2" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) * 2.58998811;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) * 25899881100;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "meter2") {
        result.value = Number(input.value) * 2589988.11;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "yard2") {
        result.value = Number(input.value) * 3097600;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "inch2") {
        result.value = Number(input.value) * 4014489600;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "feet2") {
        result.value = Number(input.value) * 5280;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "mile2") {
        result.value = input.value;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 2589988110000;
    } else if (inputTypeValue === "mile2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) * 258.998811;
    }

    if (inputTypeValue === "millimeter2" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) / 1000000000000;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) / 100;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "meter2") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "yard2") {
        result.value = Number(input.value) / 836127.36;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "inch2") {
        result.value = Number(input.value) / 645.16;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "feet2") {
        result.value = Number(input.value) / 92903.04;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 2589988110000;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "millimeter2") {
        result.value = input.value;
    } else if (inputTypeValue === "millimeter2" && resultTypeValue === "hectare") {
        result.value = Number(input.value) / 10000000000;
    }

    if (inputTypeValue === "hectare" && resultTypeValue === "meter2") {
        result.value = Number(input.value) * 10000;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "kilometer2") {
        result.value = Number(input.value) / 100;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "centimeter2") {
        result.value = Number(input.value) * 100000000;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "yard2") {
        result.value = Number(input.value) * 11959.9005;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "inch2") {
        result.value = Number(input.value) * 15500031;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "feet2") {
        result.value = Number(input.value) / 107639.104;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "mile2") {
        result.value = Number(input.value) / 258.998811;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "millimeter2") {
        result.value = Number(input.value) * 10000000000;
    } else if (inputTypeValue === "hectare" && resultTypeValue === "hectare") {
        result.value = input.value;
    }

    //Volume
    if (inputTypeValue === "meter3" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "meter3") {
        result.value = input.value;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "yard3") {
        result.value = Number(input.value) * 1.30795062;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "inch3") {
        result.value = Number(input.value) * 61023.7441;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "feet3") {
        result.value = Number(input.value) * 353146667;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "liter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 1000000000;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "gallon") {
        result.value = Number(input.value) * 264.172052;
    } else if (inputTypeValue === "meter3" && resultTypeValue === "floz") {
        result.value = Number(input.value) * 33814.0227;
    }

    if (inputTypeValue === "milliliter" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "centimeter3") {
        result.value = input.value;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "milliliter") {
        result.value = input.value;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "yard3") {
        result.value = Number(input.value) / 764554.858;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "inch3") {
        result.value = Number(input.value) / 16.387064;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "feet3") {
        result.value = Number(input.value) / 28316.8466;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "liter") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "gallon") {
        result.value = Number(input.value) / 3785.41178;
    } else if (inputTypeValue === "milliliter" && resultTypeValue === "floz") {
        result.value = Number(input.value) / 29.5735;
    }

    if (inputTypeValue === "centimeter3" && resultTypeValue === "milliliter") {
        result.value = input.value;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "centimeter3") {
        result.value = input.value;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "yard3") {
        result.value = Number(input.value) / 764554.85798;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "inch3") {
        result.value = Number(input.value) / 16.387064;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "feet3") {
        result.value = Number(input.value) / 28316.846592;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "liter") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "gallon") {
        result.value = Number(input.value) / 3785.41;
    } else if (inputTypeValue === "centimeter3" && resultTypeValue === "floz") {
        result.value = Number(input.value) / 29.573515625;
    }

    if (inputTypeValue === "yard3" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) * 764554.85798;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) * 764554.85798;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 1.3079506193;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "yard3") {
        result.value = input.value;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "inch3") {
        result.value = Number(input.value) * 46656;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "feet3") {
        result.value = Number(input.value) * 27;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "liter") {
        result.value = Number(input.value) * 764.55485798;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 764554857.98;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "gallon") {
        result.value = Number(input.value) * 201.97412116;
    } else if (inputTypeValue === "yard3" && resultTypeValue === "floz") {
        result.value = Number(input.value) * 25852.687509;
    }

    if (inputTypeValue === "inch3" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) * 16.387064;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) * 16.387064;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 61023.744095;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "yard3") {
        result.value = Number(input.value) * 46656;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "inch3") {
        result.value = input.value;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "feet3") {
        result.value = Number(input.value) / 1728;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "liter") {
        result.value = Number(input.value) / 61.023744095;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 16387.064;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "gallon") {
        result.value = Number(input.value) / 230.99989113;
    } else if (inputTypeValue === "inch3" && resultTypeValue === "floz") {
        result.value = Number(input.value) / 1.8046866495;
    }

    if (inputTypeValue === "feet3" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) * 28316.846592;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) * 28316.846592;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 35.314666721;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "yard3") {
        result.value = Number(input.value) / 27;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "inch3") {
        result.value = Number(input.value) * 1728 ;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "feet3") {
        result.value = input.value;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "liter") {
        result.value = Number(input.value) * 28.316846592;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 28316846.592;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "gallon") {
        result.value = Number(input.value) * 7.480523006;
    } else if (inputTypeValue === "feet3" && resultTypeValue === "floz") {
        result.value = Number(input.value) * 957.50694476;
    }

    if (inputTypeValue === "liter" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "liter" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "liter" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "liter" && resultTypeValue === "yard3") {
        result.value = Number(input.value) / 764.55485798;
    } else if (inputTypeValue === "liter" && resultTypeValue === "inch3") {
        result.value = Number(input.value) * 61.023744095;
    } else if (inputTypeValue === "liter" && resultTypeValue === "feet3") {
        result.value = Number(input.value) / 28.316846592;
    } else if (inputTypeValue === "liter" && resultTypeValue === "liter") {
        result.value = input.value;
    } else if (inputTypeValue === "liter" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "liter" && resultTypeValue === "gallon") {
        result.value = Number(input.value) / 3.78541;
    } else if (inputTypeValue === "liter" && resultTypeValue === "floz") {
        result.value = Number(input.value) / 33.814038638;
    }

    if (inputTypeValue === "millimeter3" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 1000000000;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "yard3") {
        result.value = Number(input.value) / 764554857.98;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "inch3") {
        result.value = Number(input.value) / 16387.064;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "feet3") {
        result.value = Number(input.value) / 28316846.592;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "liter") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "millimeter3") {
        result.value = input.value;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "gallon") {
        result.value = Number(input.value) / 3785410;
    } else if (inputTypeValue === "millimeter3" && resultTypeValue === "floz") {
        result.value = Number(input.value) / 29573.515625;
    }

    if (inputTypeValue === "gallon" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) * 3785.41;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) * 3785.41;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 264.17217686;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "yard3") {
        result.value = Number(input.value) / 201.97412116;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "inch3") {
        result.value = Number(input.value) * 230.99989113;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "feet3") {
        result.value = Number(input.value) / 7.480523006;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "liter") {
        result.value = Number(input.value) * 3.78541;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 3785410;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "gallon") {
        result.value = input.value;
    } else if (inputTypeValue === "gallon" && resultTypeValue === "floz") {
        result.value = Number(input.value) * 128;
    }
    
    if (inputTypeValue === "floz" && resultTypeValue === "milliliter") {
        result.value = Number(input.value) * 29.5735296;
    } else if (inputTypeValue === "floz" && resultTypeValue === "centimeter3") {
        result.value = Number(input.value) * 29.57353;
    } else if (inputTypeValue === "floz" && resultTypeValue === "floz") {
        result.value = input.value;
    } else if (inputTypeValue === "floz" && resultTypeValue === "yard3") {
        result.value = Number(input.value) / 25852,675324675;
    } else if (inputTypeValue === "floz" && resultTypeValue === "inch3") {
        result.value = Number(input.value) * 1.8047;
    } else if (inputTypeValue === "floz" && resultTypeValue === "feet3") {
        result.value = Number(input.value) * 957.50649;
    } else if (inputTypeValue === "floz" && resultTypeValue === "liter") {
        result.value = Number(input.value) * 33.8140227;
    } else if (inputTypeValue === "floz" && resultTypeValue === "millimeter3") {
        result.value = Number(input.value) * 29573.5296875;
    } else if (inputTypeValue === "floz" && resultTypeValue === "gallon") {
        result.value = Number(input.value) / 128;
    } else if (inputTypeValue === "floz" && resultTypeValue === "meter3") {
        result.value = Number(input.value) / 33814.0227 ;
    }

    //Mass
    if (inputTypeValue === "kg" && resultTypeValue === "kg") {
        result.value = input.value;
    } else if (inputTypeValue === "kg" && resultTypeValue === "g") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "kg" && resultTypeValue === "mg") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "kg" && resultTypeValue === "oz") {
        result.value = Number(input.value) * 35.2739619;
    } else if (inputTypeValue === "kg" && resultTypeValue === "lb") {
        result.value = Number(input.value) * 2.20462262;
    } else if (inputTypeValue === "kg" && resultTypeValue === "tonne") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "kg" && resultTypeValue === "sh.t") {
        result.value = Number(input.value) * 907.18474;
    }

    if (inputTypeValue === "g" && resultTypeValue === "kg") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "g" && resultTypeValue === "g") {
        result.value = input.value;
    } else if (inputTypeValue === "g" && resultTypeValue === "mg") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "g" && resultTypeValue === "oz") {
        result.value = Number(input.value) / 28.3495231;
    } else if (inputTypeValue === "g" && resultTypeValue === "lb") {
        result.value = Number(input.value) / 453.59237;
    } else if (inputTypeValue === "g" && resultTypeValue === "tonne") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "g" && resultTypeValue === "sh.t") {
        result.value = Number(input.value) / 907184.74;
    }

    if (inputTypeValue === "mg" && resultTypeValue === "kg") {
        result.value = Number(input.value) / 1000000;
    } else if (inputTypeValue === "mg" && resultTypeValue === "g") {
        result.value = Number(input.value) / 1000;
    } else if (inputTypeValue === "mg" && resultTypeValue === "mg") {
        result.value = input.value;
    } else if (inputTypeValue === "mg" && resultTypeValue === "oz") {
        result.value = Number(input.value) / 28349.5231;
    } else if (inputTypeValue === "mg" && resultTypeValue === "lb") {
        result.value = Number(input.value) / 453592.37;
    } else if (inputTypeValue === "mg" && resultTypeValue === "tonne") {
        result.value = Number(input.value) / 1000000000;
    } else if (inputTypeValue === "mg" && resultTypeValue === "sh.t") {
        result.value = Number(input.value) / 907184740;
    }

    if (inputTypeValue === "oz" && resultTypeValue === "kg") {
        result.value = Number(input.value) / 35.273990723;
    } else if (inputTypeValue === "oz" && resultTypeValue === "g") {
        result.value = Number(input.value) * 28.3495;
    } else if (inputTypeValue === "oz" && resultTypeValue === "mg") {
        result.value = Number(input.value) * 28349.5;
    } else if (inputTypeValue === "oz" && resultTypeValue === "oz") {
        result.value = input.value;
    } else if (inputTypeValue === "oz" && resultTypeValue === "lb") {
        result.value = Number(input.value) / 16;
    } else if (inputTypeValue === "oz" && resultTypeValue === "tonne") {
        result.value = Number(input.value) / 35273.990723;
    } else if (inputTypeValue === "oz" && resultTypeValue === "sh.t") {
        result.value = Number(input.value) / 32000;
    }

    if (inputTypeValue === "lb" && resultTypeValue === "kg") {
        result.value = Number(input.value) / 2.2046244202;
    } else if (inputTypeValue === "lb" && resultTypeValue === "g") {
        result.value = Number(input.value) * 453.592;
    } else if (inputTypeValue === "lb" && resultTypeValue === "mg") {
        result.value = Number(input.value) * 453592;
    } else if (inputTypeValue === "lb" && resultTypeValue === "oz") {
        result.value = Number(input.value) * 16;
    } else if (inputTypeValue === "lb" && resultTypeValue === "lb") {
        result.value = input.value;
    } else if (inputTypeValue === "lb" && resultTypeValue === "tonne") {
        result.value = Number(input.value) * 2204.6244202;
    } else if (inputTypeValue === "lb" && resultTypeValue === "sh.t") {
        result.value = Number(input.value) / 2000;
    }

    if (inputTypeValue === "tonne" && resultTypeValue === "kg") {
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === "tonne" && resultTypeValue === "g") {
        result.value = Number(input.value) * 1000000;
    } else if (inputTypeValue === "tonne" && resultTypeValue === "mg") {
        result.value = Number(input.value) * 1000000000;
    } else if (inputTypeValue === "tonne" && resultTypeValue === "oz") {
        result.value = Number(input.value) * 35273.990723;
    } else if (inputTypeValue === "tonne" && resultTypeValue === "lb") {
        result.value = Number(input.value) * 2204.6244202;
    } else if (inputTypeValue === "tonne" && resultTypeValue === "tonne") {
        result.value = input.value;
    } else if (inputTypeValue === "tonne" && resultTypeValue === "sh.t") {
        result.value = Number(input.value) * 1.1023122101;
    }

    if (inputTypeValue === "sh.t" && resultTypeValue === "kg") {
        result.value = Number(input.value) * 907.184;
    } else if (inputTypeValue === "sh.t" && resultTypeValue === "g") {
        result.value = Number(input.value) * 907184;
    } else if (inputTypeValue === "sh.t" && resultTypeValue === "mg") {
        result.value = Number(input.value) * 907184000;
    } else if (inputTypeValue === "sh.t" && resultTypeValue === "oz") {
        result.value = Number(input.value) * 32000;
    } else if (inputTypeValue === "sh.t" && resultTypeValue === "lb") {
        result.value = Number(input.value) * 2000;
    } else if (inputTypeValue === "sh.t" && resultTypeValue === "tonne") {
        result.value = Number(input.value) / 1.1023122101;
    } else if (inputTypeValue === "sh.t" && resultTypeValue === "sh.t") {
        result.value = input.value;
    }

    //Temperature
    if (inputTypeValue === "c" && resultTypeValue === "c") {
        result.value = input.value;
    } else if (inputTypeValue === "c" && resultTypeValue === "f") {
        result.value = Number(input.value) * (1.8) + 32;
    } else if (inputTypeValue === "c" && resultTypeValue === "k") {
        result.value = Number(input.value) + 273.15;
    } else if (inputTypeValue === "c" && resultTypeValue === "r") {
        result.value = (Number(input.value) + 273.15) * 1.8;
    } 

    if (inputTypeValue === "f" && resultTypeValue === "c") {
        result.value = (Number(input.value) - 32) / 1.8;
    } else if (inputTypeValue === "f" && resultTypeValue === "f") {
        result.value = input.value;
    } else if (inputTypeValue === "f" && resultTypeValue === "k") {
        result.value = ((Number(input.value) - 32) / 1.8) + 273.15;
    } else if (inputTypeValue === "f" && resultTypeValue === "r") {
        result.value = Number(input.value) + 459.67;
    } 

    if (inputTypeValue === "k" && resultTypeValue === "c") {
        result.value = Number(input.value) - 273.15;
    } else if (inputTypeValue === "k" && resultTypeValue === "f") {
        result.value = (Number(input.value) - 273.15) * 1.8 + 32;
    } else if (inputTypeValue === "k" && resultTypeValue === "k") {
        result.value = input.value;
    } else if (inputTypeValue === "k" && resultTypeValue === "r") {
        result.value = Number(input.value) * 1.8;
    } 

    if (inputTypeValue === "r" && resultTypeValue === "c") {
        result.value = Number(input.value) / 1.8 - 273.15;
    } else if (inputTypeValue === "r" && resultTypeValue === "f") {
        result.value = Number(input.value) - 459.67;
    } else if (inputTypeValue === "r" && resultTypeValue === "k") {
        result.value = Number(input.value) / 1.8;
    } else if (inputTypeValue === "r" && resultTypeValue === "r") {
        result.value = input.value;
    } 
}