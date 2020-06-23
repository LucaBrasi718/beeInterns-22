function Men(name, secondName) {
    this.profession = 'hero';
    this.name = name;
    this.secondName = secondName;
}

const superman = new Men('Кларк', 'Кент');
console.log('superman: ', superman);