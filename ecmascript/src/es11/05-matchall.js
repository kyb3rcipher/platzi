const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Kiwi, Banana, Orange, Apple, Pineapple, etc, etc...";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
