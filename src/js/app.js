// TODO: write your code here

export default function getSpecial(character) {
  const arraySpecial = [];
  character.special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    const specialAttack = {
      id, name, icon, description,
    };
    arraySpecial.push(specialAttack);
  });
  return arraySpecial;
}
