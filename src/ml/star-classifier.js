export function classifySpectralClass(temp) {
    // Імітація роботи ML моделі на основі температури
    if (temp >= 30000) return "Клас O (Блакитна)";
    if (temp >= 10000) return "Клас A (Біла)";
    if (temp >= 6000) return "Клас G (Жовта)";
    if (temp >= 3500) return "Клас K (Помаранчева)";
    return "Клас M (Червона)";
}
