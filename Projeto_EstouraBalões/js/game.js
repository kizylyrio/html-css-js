        function startGame() {

            var queryString = window.location.search;
            var parameters = queryString.split("&");
            var level = getValue(parameters[0]);

            var totalBalloons = 104;
            var burstedBallons = 0;

            switch (level) {
                case "easy":
                    var timeout = 120;
                    break;

                case "medium":
                    var timeout = 60;
                    break;

                case "hard":
                    var timeout = 30;
                    break;
            }

            document.getElementById('timer').innerHTML = timeout;
            countDown(timeout);

            document.getElementById('total-balloons').innerHTML = totalBalloons;
            createBallons(totalBalloons);

            document.getElementById('bursted-ballons').innerHTML = burstedBallons;
        }

        function getValue(parameter) {
            var properties = parameter.split("=");
            return properties[1] //value;
        }

        function createBallons(totalBalloons) {

            for (count = 0; count < totalBalloons; count++) {
                var balloon = document.createElement("img");
                balloon.src = 'img/small_balloon.png';
                balloon.setAttribute("class", "balloon");

                document.getElementById('area').appendChild(balloon);
            }
        }

        function countDown(timeout) {

            var timer = timeout;
            var timeout = timeout * 1000; //seconds to miliseconds

            //Run count down
            var timerID = setInterval(function() {
                timer = timer - 1;
                document.getElementById('timer').innerHTML = timer;
            }, 1000);

            //Stop count down
            setTimeout(function() {
                clearInterval(timerID);
                alert("Game Over");
            }, timeout + 1000); //include the last second (0s);
        }