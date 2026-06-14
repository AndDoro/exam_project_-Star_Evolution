export function getStarStats(t) {
    let temp, lum, rad, s_class, info, color;
    let f;

    if (t < 15) { // ПРОТОЗОРЯ
        f = t / 15;
        temp = Math.floor(2000 + f * 3000);
        lum = Number((0.1 + f * 0.6).toFixed(2));
        rad = Number((6 - f * 4.5).toFixed(2));
        s_class = "Протозоря";
        info = "Гравітаційне стиснення хмари газу та пилу.";
        color = "#ff6600";
    } 
    else if (t < 85) { // ГОЛОВНА ПОСЛІДОВНІСТЬ
        f = (t - 15) / 70;
        temp = Math.floor(5000 + f * 1000);
        lum = Number((1.0 + f * 0.8).toFixed(2));
        rad = Number((1.0 + f * 0.4).toFixed(2));
        s_class = "Головна послідовність";
        info = "Стабільний термоядерний синтез Гелію.";
        color = "#ffffcc";
    } 
    else if (t < 97) { // ГІГАНТ
        f = (t - 85) / 12;
        temp = Math.floor(6000 - f * 4000);
        lum = Math.floor(1.8 + f * 1200);
        rad = Number((1.4 + f * 130).toFixed(1));
        s_class = "Червоний гігант";
        info = "Ядро стискається, зовнішня оболонка розширюється.";
        color = "#ff1a00";
    } 
    else { // КАРЛИК
        temp = 36000; lum = 35.0; rad = 0.05;
        s_class = "Білий карлик";
        info = "Зоря скинула оболонку. Залишилося надщільне ядро.";
        color = "#b3e6ff";
    }

    return { temp, lum, rad, s_class, info, color };
}
