function doSomething(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
    doSomething(function(data) {
        var processedData = data.split('');

        try{
        doOtherThing(function(data2) {
            var processedData2 = data2.split('');

            try {
            setTimeout(function() {
                console.log(processedData, processedData2)
            }, 1000);
        } catch (err) {
            //handle error
        }
        });
    } catch(err){
        //handle error
    }
    });
    } catch(err) {
        //handle error
    }   
}

doAll();