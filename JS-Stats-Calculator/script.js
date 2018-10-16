  function getStats() {
                
                var string = document.getElementById("numbers").value;
                
                var numberList = string.split(" ");
                for(var x=0; x < numberList.length; x++) { numberList[x] = +numberList[x]; }
                                
                var sum = 0;
                for(var x=0; x < numberList.length; x++) { sum = sum + numberList[x]; }
                
                var mean = sum / numberList.length;
                
                document.getElementById("printMean").innerHTML = "Mean : " + mean;
                
                var median = 0;
                if (numberList.length % 2 === 0) { //Even
                    median = (numberList[numberList.length / 2 - 1] + numberList[numberList.length / 2]) / 2;
                } else { //Odd
                    median = numberList[(numberList.length - 1) / 2];
                }
                
                document.getElementById("printMedian").innerHTML = "Median : " + median;
                
                var mode = [];
                      for(x=0; x < numberList.length; x++) {if(numberList[x] === numberList[x + 1]) {
                        mode.push(numberList[x]);
                    }
                }
                
                if (mode == "") {
                    mode = "No Mode";
                }
                
                document.getElementById("printMode").innerHTML = "Mode : " + mode; 
                
                var order = numberList.sort(function(a, b){return a-b});
                var firstNumber = order[0];
                var lastNumber = order[order.length - 1];
                var range = lastNumber - firstNumber;
                
                document.getElementById("printRange").innerHTML = "Range : " + range; 
                    
                var printMin = numberList[0];
                
                document.getElementById("printMin").innerHTML = "Minimum : " + printMin;
                
                var reverseList = numberList.reverse();
                
                var printMax = reverseList[0];
                
                document.getElementById("printMax").innerHTML = "Maximum : " + printMax;
                
                var n = numberList.length;
                
                var k = .25
                
                var y = Math.round(n * k)
                
                var printUpperQ = numberList[y];
                
                document.getElementById("printUpperQ").innerHTML = "Upper Quartile : " + printUpperQ;
                
                var q = .75
                
                var w = Math.round(n * q)
                
                var printLowerQ = numberList[w];
                
                document.getElementById("printLowerQ").innerHTML = "Lower Quartile : " + printLowerQ;
                
                var numberValues = numberList;
                
                var subtractedValues = numberValues.map(function(element) {
                    return mean - element;
                });
                
                var varianceValues = subtractedValues.map(function(element) {
                    return element * element;
                });
                
                document.getElementById("printVariance").innerHTML = "Variance Values : " + varianceValues;
                
            };
            
            reset = document.getElementById('reset');
            
            reset.onclick = resetNumbers;
            
            function resetNumbers() {
                printMin.innerHTML = '';
                printMax.innerHTML = '';
                printMean.innerHTML = '';
                printMedian.innerHTML = '';
                printMode.innerHTML = '';
                printRange.innerHTML = '';
                printUpperQ.innerHTML = '';
                printLowerQ.innerHTML = '';
                printVariance.innerHTML = '';
            }