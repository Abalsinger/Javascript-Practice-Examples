  function getStats() {
                
                var string = document.getElementById("numbers").value;
                
                var numberList = string.split(" ");
                for(var x=0; x < numberList.length; x++) { numberList[x] = +numberList[x]; }
                                
                var sum = 0;
                for(var x=0; x < numberList.length; x++) { sum = sum + numberList[x]; }
      
                var frequency = numberList.length;
      
                document.getElementById("printFreq").innerHTML = frequency;
                
                var mean = sum / numberList.length;
                
                document.getElementById("printMean").innerHTML = mean; 
      
                var order = numberList.sort(function(a, b){return a-b});
                var firstNumber = order[0];
                var lastNumber = order[order.length - 1];
                var trend = lastNumber - firstNumber / firstNumber * 100;
      
                document.getElementById("printTrend").innerHTML = trend;
      
                var twentyMean = mean * 0.20;
                var upperLimit = twentyMean + mean;
                var lowerLimit = mean - twentyMean;
                var meanUpper = upperLimit + mean;
                var meanLower = lowerLimit + mean;
                
                    
                document.getElementById("printUpperLimit").innerHTML = meanUpper;
                document.getElementById("printLowerLimit").innerHTML = meanLower;
      
      
                var stringB = document.getElementById("numbersB").value;
                
                var numberListB = stringB.split(" ");
                for(var x=0; x < numberListB.length; x++) { numberListB[x] = +numberListB[x]; }
                                
                var sumB = 0;
                for(var x=0; x < numberListB.length; x++) { sumB = sumB + numberListB[x]; }
      
                var frequencyB = numberListB.length;
      
                document.getElementById("printFreqB").innerHTML = frequencyB;
                
                var meanB = sumB / numberListB.length;   
                
                document.getElementById("printMeanB").innerHTML =  meanB; 
      
                var orderB = numberListB.sort(function(a, b){return a-b});
                var firstNumberB = orderB[0];
                var lastNumberB = orderB[orderB.length - 1];
                var trendB = lastNumberB - firstNumberB / firstNumberB * 100;
      
                document.getElementById("printTrendB").innerHTML = trendB;
      
                var twentyMeanB = meanB * 0.20;
                var upperLimitB = twentyMeanB + meanB;
                var lowerLimitB = meanB - twentyMeanB;
                var meanUpperB = upperLimitB + meanB;
                var meanLowerB = lowerLimitB + meanB;
                
                    
                document.getElementById("printUpperLimitB").innerHTML = meanUpperB;
                document.getElementById("printLowerLimitB").innerHTML = meanLowerB;
      
                var immediacy = mean / meanB * 100;
      
                document.getElementById("printImmediacy").innerHTML = immediacy;
            };
            
            reset = document.getElementById('reset');
            
            reset.onclick = resetNumbers;
            
            function resetNumbers() {
                printFreq.innerHTML = '';
                printFreqB.innerHTML = '';
                printMean.innerHTML = '';
                printMeanB.innerHTML = '';
                printTrend.innerHTML = '';
                printTrendB.innerHTML = '';
                printUpperLimit.innerHTML = '';
                printLowerLimit.innerHTML = '';
                printUpperLimitB.innerHTML = '';
                printLowerLimitB.innerHTML = '';
            }