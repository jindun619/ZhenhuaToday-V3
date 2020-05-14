// const foodObj = {
//   1: {
//     id: "1",
//     img_ext: "jpg",
//     kor_name: "주먹밥",
//     cna_name: "饭团",
//     soup: "0",
//   },
//   2: {
//     id: "2",
//     img_ext: "jpg",
//     kor_name: "계란조림",
//     cna_name: "鸡蛋酱牛肉",
//     soup: "0",
//   },
//   3: {
//     id: "3",
//     img_ext: "jpg",
//     kor_name: "토마토",
//     cna_name: "西红柿",
//     soup: "0",
//   },
// };

const foodMenuObj = [
  {
    id: "0",
    date: "2020-05-14",
    bld: "0",
    soup: "1",
    food1: "2",
    food2: "3",
    food3: "1",
    food4: "2",
    food5: "3",
  },
  {
    id: "1",
    date: "2020-05-14",
    bld: "1",
    soup: "3",
    food1: "2",
    food2: "1",
    food3: "3",
    food4: "2",
    food5: "1",
  },
  {
    id: "2",
    date: "2020-05-14",
    bld: "2",
    soup: "10",
    food1: "33",
    food2: "12",
    food3: "21",
    food4: "32",
    food5: "13",
  },
  {
    id: "2",
    date: "2020-05-14",
    bld: "2",
    soup: "1",
    food1: "2",
    food2: "3",
    food3: "1",
    food4: "2",
    food5: "3",
  },
  {
    id: "2",
    date: "2020-05-14",
    bld: "2",
    soup: "1",
    food1: "2",
    food2: "3",
    food3: "1",
    food4: "2",
    food5: "3",
  },
];

ReactDOM.render(
  <FoodContainer foodMenu={foodMenuObj} lang="kor" />,
  document.getElementById("root")
);
