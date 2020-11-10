
// Test 5
// Write a function that takes in three numbers. These numbers represent the lengths of the sides of a triangle. The function should return the area of a triangle.
function TriangleArea(side1, side2, side3) {

    let s = (side1+side2+side3)/2;
    let area = Math.sqrt(s*(s - side1)*(s-side2)*(s-side3));

    console.log(area);

}
        TriangleArea(2,4,4);

   