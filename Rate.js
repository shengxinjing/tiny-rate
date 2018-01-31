export default function rate(num){
  return "★★★★★☆☆☆☆☆".slice(5 - num, 10 - num);
}