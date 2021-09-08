x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { // 8, 9, 10
    var x = 10;
    document.write(x); // 10
    document.write(a); // 8
    var f = function(a, b, c) { // 8, 9, 10
        b = a;
        document.write(b); // 8
        b = c; // 10
        var x = 5;
    }
    f(a, b, c); // 8, 9, 10
    document.write(b); // 9
}
c(8, 9, 10);
document.write(b); // 10
document.write(x); // 1

// - 10889101