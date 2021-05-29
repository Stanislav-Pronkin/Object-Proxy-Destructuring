import getSpecial from '../app';

test('get special', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
    ],
  };
  const specialAttack = getSpecial(character);

  expect(specialAttack).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  }]);
});

test('get special', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
      },
    ],
  };
  const specialAttack = getSpecial(character);

  expect(specialAttack).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Описание недоступно',
  }]);
});
