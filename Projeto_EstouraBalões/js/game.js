        function startGame() {

            var queryString = window.location.search;
            var parameters = queryString.split("&");
            var level = getValue(parameters[0]);


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

            var totalBalloons = 20;
            document.getElementById('total-balloons').innerHTML = totalBalloons;
            createBallons(totalBalloons);
        }

        function getValue(parameter) {
            var properties = parameter.split("=");
            return properties[1] //value;
        }

        function createBallons(totalBalloons) {

            for (count = 0; count < totalBalloons; count++) {
                var balloon = document.createElement("img");
                balloon.src = 'img/small_balloon.png';
                balloon.style = "margin: 10px;"

                document.getElementById('area').appendChild(balloon);
            }
        }