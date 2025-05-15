type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;
function compare(top: TopType, bottom: BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log("=== Compare function ============");
const obj1 = { id: 12, name: "John", length: 3, height: 10, color: "red" };
const obj2 = {
  alfa: 1,
  beta: "sigma",
  position: 1,
  weight: 2,
  name: "John",
  color: "red",
};
console.log(compare(obj1, obj2));
