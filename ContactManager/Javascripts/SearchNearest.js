
$(document).ready(function () {
    var jsonData;

    $('#contactsForm').submit(function (event) {
        event.preventDefault();
    });
    $('#searchBtn').click(function (event) {
        if ($("#nearestCheck").is(':checked')) {
            if (navigator.geolocation) {
                var timeoutVal = 10 * 1000 * 1000;
                navigator.geolocation.getCurrentPosition(
                  sendJsonData,
                  sendJsonDataWithoutCoord,
                  { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
                );
            }
            else {
                alert("Geolocation is not supported by this browser");
            }
        }
        else {
            sendJsonDataWithoutCoord(0);
        }
    });

    function sendJsonData(position) {
        var filter = {
            "FirstName": $('#firstName').val(),
            "LastName": $("#lastName").val(),
            "EmailAddress": $("#emailAddress").val(),
            "MyLatitude": position.coords.latitude,
            "MyLongitude": position.coords.longitude
        };
        jsonData = JSON.stringify(filter);

        $.ajax({
            url: '/AllContacts/Index',
            data: jsonData,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                document.open(data);
                document.write(data);
                document.close();
            }
        });
    }


    function sendJsonDataWithoutCoord(error) {
        var filter = {
            "FirstName": $('#firstName').val(),
            "LastName": $("#lastName").val(),
            "EmailAddress": $("#emailAddress").val(),
        };
        jsonData = JSON.stringify(filter);

        $.ajax({
            url: '/AllContacts/Index',
            data: jsonData,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                document.open(data);
                document.write(data);
                document.close();
            }
        });

        if (error !== 0) {
            var errors = {
                1: 'Permission denied',
                2: 'Position unavailable',
                3: 'Request timeout'
            };
            alert("Error: " + errors[error.code]);
        }
    }
});