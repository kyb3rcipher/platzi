// Callback
function a() {}
function b(a) {}
b(a);

// Return function
function a() {
    function b() {}
    return b;
}

// Assign function to variable -> Function expression
//const a = function() {} // The name is the variable (a)

function a() {}
const obj = {}
a.call(obj);


// Nested function
function a() {
    function b() {
        function c() {
            
        }
    }
    b();
}
a();

// Method
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage() {
        console.log('To mars! 🚀');
    }
}
rocket.name();