        function startGame() {

            var queryString = window.location.search;
            var parameters = queryString.split("&");
            var level = getValue(parameters[0]);

            var totalBalloons = 104;
            var burstedBalloons = 0;

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
            createBalloons(totalBalloons);

            document.getElementById('bursted-balloons').innerHTML = burstedBalloons;
        }

        function getValue(parameter) {
            var properties = parameter.split("=");
            return properties[1] //value;
        }

        function createBalloons(totalBalloons) {

            for (count = 0; count < totalBalloons; count++) {
                var balloon = document.createElement("img");
                balloon.src = 'img/small_balloon.png';
                balloon.setAttribute("class", "balloon");
                balloon.id = 'balloon-' + count;
                balloon.onclick = function() { burstBalloon(this) };
                document.getElementById('area').appendChild(balloon);
            }
        }

        function burstBalloon(balloon) {
            if (balloon.src.indexOf("img/small_balloon.png") > -1) {
                balloon.src = 'img/small_bursted_balloon.png';

                document.getElementById('total-balloons').innerHTML = parseInt(document.getElementById('total-balloons').innerHTML) - 1;
                document.getElementById('bursted-balloons').innerHTML = parseInt(document.getElementById('bursted-balloons').innerHTML) + 1;

                checkSuccess();
            }
        }

        function checkSuccess() {
            if (parseInt(document.getElementById('total-balloons').innerHTML) == 0) {
                setTimeout(function() {
                    alert("You Win!");
                    clearInterval(timerID);
                }, 100); //To show the 0s on screen
            }
        }

        function countDown(timeout) {

            var timer = timeout;
            var timeout = timeout * 1000; //seconds to miliseconds

            //Run count down
            timerID = setInterval(function() {
                timer = timer - 1;
                document.getElementById('timer').innerHTML = timer;
            }, 1000);

            //Stop count down on failed
            setTimeout(function() {
                clearInterval(timerID);
                alert("Game Over");
            }, timeout + 1000); //include the last second (0s);
        }