var p_id_array = "";
var p_name_array = "";
var p_company_array = "";
var p_function_array = "";
var p_tags_array = "";
var p_email_array = "";
var p_number_array = "";

var c_id_array = "";
var c_name_array = "";
var c_tags_array = "";
var c_email_array = "";
var c_number_array = "";

var cu_id_array = "";
var cu_name_array = "";
var cu_email_array = "";
var cu_number_array = "";
var cu_street_array = "";
var cu_zip_array = "";
var cu_city_array = "";
var cu_country_array = "";
var cu_total_array = "";
var cu_date_array = "";
var cu_payment_array = "";


function dashboard(p_id, p_name, p_company, p_function, p_tags, p_email, p_number, c_id, c_name, c_tags, c_email, c_number, cu_id, cu_name, cu_email, cu_number, cu_street, cu_zip, cu_city, cu_country, cu_total, cu_date, cu_payment) {

    p_id_array = p_id.split(", ");
    p_name_array = p_name.split(", ");
    p_company_array = p_company.split(", ");
    p_function_array = p_function.split(", ");
    p_tags_array = p_tags.split(", ");
    p_email_array = p_email.split(", ");
    p_number_array = p_number.split(", ");

    c_id_array = c_id.split(", ");
    c_name_array = c_name.split(", ");
    c_tags_array = c_tags.split(", ");
    c_email_array = c_email.split(", ");
    c_number_array = c_number.split(", ");

    cu_id_array = cu_id.split(", ");
    cu_name_array = cu_name.split(", ");
    cu_email_array = cu_email.split(", ");
    cu_number_array = cu_number.split(", ");
    cu_street_array = cu_street.split(", ");
    cu_zip_array = cu_zip.split(", ");
    cu_city_array = cu_city.split(", ");
    cu_country_array = cu_country.split(", ");
    cu_total_array = cu_total.split(", ");
    cu_date_array = cu_date.split(", ");
    cu_payment_array = cu_payment.split(", ");




    document.querySelector("#content").innerHTML = "<div id=\"info-bar\">\n" +
        "        <h1 id=\"Location\">Dashboard</h1>\n" +
        "    </div>\n";

}


var text = "";
var text2 = "";
var text3 = "";

function contacts() {

    var table = "";
    var i;
    var name_ = ' ';
    var w;

    for (w = 0; w < p_id_array.length; w++) {


        table += '<tr onclick="showContact(\'' + p_id_array[w] + '\', \'' + p_name_array[w] + '\', \'' + p_company_array[w] + '\', \'' + p_function_array[w] + '\', \'' + p_tags_array[w] + '\', \'' + p_email_array[w] + '\', \'' + p_number_array[w] + '\')">\n' +
            "                <td><div id='avatar'></div></td>\n" +
            "                <td>" + p_name_array[w] + "</td>\n" +
            "                <td>" + p_company_array[w] + "</td>\n" +
            "                <td>" + p_function_array[w] + "</td>\n" +
            "                <td>" + p_tags_array[w] + "</td>\n" +
            "            </tr>";


    }
    for (i = 0; i < p_id_array.length; i++) {
        var a = document.getElementById("_" + p_id_array[i]);
        if (a) {

        } else {
            text += "<li id='_" + p_id_array[i] + "'><div id='avatar'></div><h1>" + p_name_array[i] + "</h1><h2><a> " + p_company_array[i] + "</a> / " + p_function_array[i] + "</h2></li>";
        }
    }
    for (i = 0; i < p_id_array.length; i++) {
        var a = document.getElementById("_" + p_id_array[i]);
        if (a) {

        } else {
            text2 += "<li id='_" + p_id_array[i] + "'><div id='avatar'></div><h1>" + p_name_array[i] + "</h1><h2><a> " + p_company_array[i] + "</a> / " + p_function_array[i] + "</h2></li>";
        }
    }

    for (i = 0; i < cu_id_array.length; i++) {
        var a = document.getElementById("_" + cu_id_array[i]);
        if (a) {

        } else {
            text3 += "<li id='_" + cu_id_array[i] + "'><div id='avatar'></div><h1>" + cu_name_array[i] + " - <a>" + cu_email_array[i] + "</a></h1><h2> €" + cu_total_array[i] + " - " + cu_date_array[i] + "</h2></li>";
        }
    }



    var rowCount1 = w;

    document.querySelector("#content").innerHTML = "<div id=\"info-bar\">\n" +
        "        <h1 id=\"Location\">Contacten</h1>\n" +
        "        <h2 id=\"TotalAmount\">" + rowCount1 + " Resultaten</h2>\n" +
        "        <a onclick=\"newContact()\" id=\"New\"><i class=\"material-icons\">add_circle_outline</i> &nbsp;Nieuw Contact</a>\n" +
        "    </div>\n" +
        "    <div id=\"Table\">\n" +
        "        <table>\n" +
        "            <tr id=\"yee\">\n" +
        "                <th></th>\n" +
        "                <th>Naam</th>\n" +
        "                <th>Bedrijf</th>\n" +
        "                <th>Positie</th>\n" +
        "                <th>Tags</th>\n" +
        "            </tr>\n" + table +
        "         </table>\n" +
        "    </div>";

}


function companies() {

    var id_array = c_id_array;
    var name_array = c_name_array;
    var tags_array = c_tags_array;
    var email_array = c_email_array;
    var number_array = c_number_array;
    var table = "";
    var i;
    var j;

    for (j = 0; j < id_array.length; j++) {


        table += '<tr onclick="showCompany(\'' + id_array[j] + '\', \'' + name_array[j] + '\', \'' + tags_array[j] + '\', \'' + email_array[j] + '\', \'' + number_array[j] + '\')">\n' +
            "                <td><div id='avatar'></div></td>\n" +
            "                <td>" + name_array[j] + "</td>\n" +
            "                <td>" + tags_array[j] + "</td>\n" +
            "            </tr>";
    }
    for (i = 0; i < p_id_array.length; i++) {
        var a = document.getElementById("_" + p_id_array[i]);
        if (a) {

        } else {
            text += "<li id='_" + p_id_array[i] + "'><div id='avatar'></div><h1>" + p_name_array[i] + "</h1><h2><a> " + p_company_array[i] + "</a> / " + p_function_array[i] + "</h2></li>";
        }
    }
    for (i = 0; i < p_id_array.length; i++) {
        var a = document.getElementById("_" + p_id_array[i]);
        if (a) {

        } else {
            text2 += "<li id='_" + p_id_array[i] + "'><div id='avatar'></div><h1>" + p_name_array[i] + "</h1><h2><a> " + p_company_array[i] + "</a> / " + p_function_array[i] + "</h2></li>";
        }
    }
    for (i = 0; i < cu_id_array.length; i++) {
        var a = document.getElementById("_" + cu_id_array[i]);
        if (a) {

        } else {
            text3 += "<li id='_" + cu_id_array[i] + "'><div id='avatar'></div><h1>" + cu_name_array[i] + " - <a>" + cu_email_array[i] + "</a></h1><h2> €" + cu_total_array[i] + " - " + cu_date_array[i] + "</h2></li>";
        }
    }


    var rowCount2 = j;

    document.querySelector("#content").innerHTML = "<div id=\"info-bar\">\n" +
        "        <h1 id=\"Location\">Bedrijven</h1>\n" +
        "        <h2 id=\"TotalAmount\">" + rowCount2 + " Resultaten</h2>\n" +
        "        <a onclick=\"newCompany()\" id=\"New\"><i class=\"material-icons\">add_circle_outline</i> &nbsp;Nieuw Bedrijf</a>\n" +
        "    </div>\n" +
        "    <div id=\"Table\">\n" +
        "        <table>\n" +
        "            <tr id=\"yee\">\n" +
        "                <th></th>\n" +
        "                <th>Naam</th>\n" +
        "                <th>Tags</th>\n" +
        "            </tr>\n" + table +
        "         </table>\n" +
        "    </div>";
}






function showCustomer(id, cu_name, cu_email, cu_number, cu_street, cu_zip, cu_city, cu_country, cu_total, cu_date, cu_payment) {

    var infoBox = document.querySelector("#info-box");


    infoBox.innerHTML = "<div id=\"info-head\">\n" +
        "        <i onclick=\"hide()\" class=\"material-icons\">\n" +
        "            clear\n" +
        "        </i>\n" +
        "        <div id=\"Company\">\n" +
        "<div id='avatar'></div>\n" +
        "            <h1>" + cu_name + "</h1>\n" +
        "        </div>\n" +
        "        <div id=\"info-menu\">\n" +
        "            <a id=\"info\">Info</a>\n" +
        "            <a id=\"orders\">Facturen</a>\n" +
        "            <a id=\"tasks\">Opties</a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div id=\"info-main\">\n" + infoMain.innerHTML +
        "    </div>";


    infoMain = document.querySelector("#info-main");
    var info = document.querySelector("#info");
    var orders = document.querySelector("#orders");
    var tasks = document.querySelector("#tasks");


    if (infoBox.style.marginLeft == "calc(100% - 450px)") {

        hide()

    } else {


        infoBox.style.marginLeft = "calc(100% - 450px)";


        info.classList.add("active");
        orders.classList.remove("active");
        tasks.classList.remove("active");
        infoMain.innerHTML = " <div id=\"contact-box\">\n" +
            "            <h1 id='Title'>Gegevens</h1>\n" +
            "            <ul id='gev'>\n" +
            "                <li><i class=\"material-icons\">person</i>" + cu_name + "</li>\n" +
            "                <li><i class=\"material-icons\">attach_money</i>€" + cu_total + "</li>\n" +
            "                <li><i class=\"material-icons\">mail</i>" + cu_email + "</li>\n" +
            "                <li><i class=\"material-icons\">smartphone</i>" + cu_number + "</li>\n" +
            "                <li><i class=\"material-icons\">home</i>" + cu_street + "</li>\n" +
            "                <li><i class=\"material-icons\">public</i>" + cu_zip + ", " + cu_city + ", " + cu_country + "</li>\n" +
            "                <li><i class=\"material-icons\">calendar_today</i>" + cu_date  + "</li>\n" +
            "            </ul>\n" +
            "        </div>";

        info.addEventListener("click", function () {
            info.classList.add("active");
            orders.classList.remove("active");
            tasks.classList.remove("active");
            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Gegevens</h1>\n" +
                "            <ul id='gev'>\n" +
                "                <li><i class=\"material-icons\">person</i>" + cu_name + "</li>\n" +
                "                <li><i class=\"material-icons\">attach_money</i>€" + cu_total + "</li>\n" +
                "                <li><i class=\"material-icons\">mail</i>" + cu_email + "</li>\n" +
                "                <li><i class=\"material-icons\">smartphone</i>" + cu_number + "</li>\n" +
                "                <li><i class=\"material-icons\">home</i>" + cu_street + "</li>\n" +
                "                <li><i class=\"material-icons\">public</i>" + cu_zip + ", " + cu_city + ", " + cu_country + "</li>\n" +
                "                <li><i class=\"material-icons\">calendar_today</i>" + cu_date  + "</li>\n" +
                "            </ul>\n" +
                "        </div>";
        });

        orders.addEventListener("click", function () {

            info.classList.remove("active");
            orders.classList.add("active");
            tasks.classList.remove("active");

            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Alle facturen</h1>\n" +
                "            <ul id='customers-list'>\n" +
                "                " + text3 + "\n" +
                "            </ul>\n" +
                "        </div>";
           filterCustomers(cu_email, id);

        });

        tasks.addEventListener("click", function () {
            info.classList.remove("active");
            orders.classList.remove("active");
            tasks.classList.add("active");
            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Opties</h1>\n" +
                "            <ul id='gev'>\n" +
                '                <li><a href=\"assets/delete_customer.php?id=' + id + '\"><i class="material-icons">delete</i>Verwijderen</a></li>\n' +
                "            </ul>\n" +
                "        </div>";
        });


    }


}




function customers() {

    var table = "";
    var i;

    for (i = 0; i < cu_id_array.length; i++) {


        table += '<tr onclick="showCustomer(\'' + cu_id_array[i] + '\', \'' + cu_name_array[i] + '\', \'' + cu_email_array[i] + '\', \'' + cu_number_array[i] + '\', \'' + cu_street_array[i] + '\', \'' + cu_zip_array[i] + '\', \'' + cu_city_array[i] + '\', \'' + cu_country_array[i] + '\', \'' + cu_total_array[i] + '\', \'' + cu_date_array[i] + '\', \'' + cu_payment_array[i] + '\')">\n' +
            "                <td><div id='avatar'></div></td>\n" +
            "                <td>" + cu_name_array[i] + "</td>\n" +
            "                <td>" + cu_date_array[i] + "</td>\n" +
            "                <td>€" + cu_total_array[i] + "</td>\n" +
            "                <td>" + cu_payment_array[i] + "</td>\n" +
            "            </tr>";


    }

    var rowCount3 = i;
    for (i = 0; i < p_id_array.length; i++) {
        var a = document.getElementById("_" + p_id_array[i]);
        if (a) {

        } else {
            text += "<li id='_" + p_id_array[i] + "'><div id='avatar'></div><h1>" + p_name_array[i] + "</h1><h2><a> " + p_company_array[i] + "</a> / " + p_function_array[i] + "</h2></li>";
        }
    }
    for (i = 0; i < p_id_array.length; i++) {
        var a = document.getElementById("_" + p_id_array[i]);
        if (a) {

        } else {
            text2 += "<li id='_" + p_id_array[i] + "'><div id='avatar'></div><h1>" + p_name_array[i] + "</h1><h2><a> " + p_company_array[i] + "</a> / " + p_function_array[i] + "</h2></li>";
        }
    }

    for (i = 0; i < cu_id_array.length; i++) {
        var a = document.getElementById("_" + cu_id_array[i]);
        if (a) {

        } else {
            text3 += "<li id='_" + cu_id_array[i] + "'><div id='avatar'></div><h1>" + cu_name_array[i] + " - <a>" + cu_email_array[i] + "</a></h1><h2> €" + cu_total_array[i] + " (" + cu_payment_array[i] + ") - " + cu_date_array[i] + "</h2></li>";
        }
    }



    document.querySelector("#content").innerHTML = "<div id=\"info-bar\">\n" +
        "        <h1 id=\"Location\">Facturen</h1>\n" +
        "        <h2 id=\"TotalAmount\">" + rowCount3 + " Resultaten</h2>\n" +
        "        <a onclick=\"newCustomer()\" id=\"New\"><i class=\"material-icons\">add_circle_outline</i> &nbsp;Nieuw Contact</a>\n" +
        "    </div>\n" +
        "    <div id=\"Table\">\n" +
        "        <table>\n" +
        "            <tr id=\"yee\">\n" +
        "                <th></th>\n" +
        "                <th>Naam</th>\n" +
        "                <th>Datum</th>\n" +
        "                <th>Bedrag</th>\n" +
        "                <th>Betaalstatus</th>\n" +
        "            </tr>\n" + table +
        "         </table>\n" +
        "    </div>";

}


function hide() {
    document.querySelector("#info-box").style.marginLeft = "100%";
}


function filterContacts(p_company, id) {
    var input, filter, ul, li, a, i, txtValue;
    input = p_company;
    filter = input.toUpperCase();
    ul = document.getElementById("coworker-list");
    var ee = "_" + id;
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a) {
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                document.getElementById(ee).style.display = "none";
                var uniqueItems = [];
                $("li").each(function(r,e){
                    var thisLI = $.trim($(e).text());
                    if(uniqueItems.indexOf(thisLI) == -1)
                        uniqueItems.push(thisLI);
                    else
                        $(e).remove();
                });

            } else {
                li[i].style.display = "none";

            }
        }
    }

}


function filterCompanies(c_name, id) {
    var input, filter, ul, li, a, i, txtValue;
    input = c_name;
    filter = input.toUpperCase();
    ul = document.getElementById("employees-list");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a) {
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";

                var uniqueItems = [];
                $("li").each(function(r,e){
                    var thisLI = $.trim($(e).text());
                    if(uniqueItems.indexOf(thisLI) == -1)
                        uniqueItems.push(thisLI);
                    else
                        $(e).remove();
                });
            } else {
                li[i].style.display = "none";

            }
        }
    }

}

function filterCustomers(cu_email, id) {
    var input, filter, ul, li, a, i, txtValue;
    input = cu_email;
    filter = input.toUpperCase();
    ul = document.getElementById("customers-list");
    li = ul.getElementsByTagName("li");
    var ee = "_" + id;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a) {
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";

                document.getElementById(ee).style.display = "none";
               var uniqueItems = [];
                $("li").each(function(r,e){
                    var thisLI = $.trim($(e).text());
                    if(uniqueItems.indexOf(thisLI) == -1)
                        uniqueItems.push(thisLI);
                    else
                        $(e).remove();
                });
            } else {
                li[i].style.display = "none";

            }
        }
    }

}

var infoMain = "";


function showContact(id, p_name, p_company, p_function, p_tags, p_email, p_number) {

    var infoBox = document.querySelector("#info-box");

    var name_ = ' ';
    var arr = p_name.split(' ');
    for(i=0;i<arr.length;i++) {
        name_ += arr[i].substr(0,1);
    }

    infoBox.innerHTML = "<div id=\"info-head\">\n" +
        "        <i onclick=\"hide()\" class=\"material-icons close\">\n" +
        "            clear\n" +
        "        </i>\n" +
        "        <div id=\"Personal\">\n" +
        "<div id='avatar'>" + name_ + "</div>\n" +
        "            <h1>" + p_name + "</h1>\n" +
        "            <h2>" + p_function + " / " + p_company + "</h2>\n" +
        "        </div>\n" +
        "        <div id=\"info-menu\">\n" +
        "            <a id=\"info\">Info</a>\n" +
        "            <a id=\"coworkers\">Collega's</a>\n" +
        "            <a id=\"tasks\">Opties</a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div id=\"info-main\">\n" + infoMain.innerHTML +
        "    </div>";


    infoMain = document.querySelector("#info-main");
    var info = document.querySelector("#info");
    var coworkers = document.querySelector("#coworkers");
    var tasks = document.querySelector("#tasks");


    if (infoBox.style.marginLeft == "calc(100% - 450px)") {

        hide()

    } else {


        infoBox.style.marginLeft = "calc(100% - 450px)";


        info.classList.add("active");
        coworkers.classList.remove("active");
        tasks.classList.remove("active");
        infoMain.innerHTML = " <div id=\"contact-box\">\n" +
            "            <h1 id='Title'>Gegevens</h1>\n" +
            "            <ul id='gev'>\n" +
            "                <li><i class=\"material-icons\">person</i>" + p_name + "</li>\n" +
            "                <li><i class=\"material-icons\">business</i>" + p_company + "</li>\n" +
            "                <li><i class=\"material-icons\">mail</i>" + p_email + "</li>\n" +
            "                <li><i class=\"material-icons\">smartphone</i>" + p_number + "</li>\n" +
            "            </ul>\n" +
            "        </div>";

        info.addEventListener("click", function () {
            info.classList.add("active");
            coworkers.classList.remove("active");
            tasks.classList.remove("active");
            infoMain.innerHTML = "<div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Gegevens</h1>\n" +
                "            <ul id='gev'>\n" +
                "                <li><i class=\"material-icons\">person</i>" + p_name + "</li>\n" +
                "                <li><i class=\"material-icons\">business</i>" + p_company + "</li>\n" +
                "                <li><i class=\"material-icons\">mail</i>" + p_email + "</li>\n" +
                "                <li><i class=\"material-icons\">smartphone</i>" + p_number + "</li>\n" +
                "            </ul>\n" +
                "        </div>";
        });

        coworkers.addEventListener("click", function () {

            info.classList.remove("active");
            coworkers.classList.add("active");
            tasks.classList.remove("active");

            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Collega's</h1>\n" +
                "            <ul id='coworker-list'>\n" +
                "                " + text + "\n" +
                "            </ul>\n" +
                "        </div>";

            filterContacts(p_company, id);

        });

        tasks.addEventListener("click", function () {

            info.classList.remove("active");
            coworkers.classList.remove("active");
            tasks.classList.add("active");
            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Opties</h1>\n" +
                "            <ul id='gev'>\n" +
                '                <li><a onclick="editContact(\'' + id + '\', \'' + p_name + '\', \'' + p_company + '\', \'' + p_function + '\', \'' + p_tags + '\', \'' + p_email + '\', \'' + p_number + '\')"><i class="material-icons">edit</i>Edit</a></li>\n' +
                '                <li><a href=\"assets/delete_contact.php?id=' + id + '\"><i class="material-icons">delete</i>Verwijderen</a></li>\n' +
                "            </ul>\n" +
                "        </div>";
        });


    }


}

function showCompany(id, c_name, c_tags, c_email, c_number) {

    var infoBox = document.querySelector("#info-box");

    var name_ = ' ';
    var arr = c_name.split(' ');
    for(i=0;i<arr.length;i++) {
        name_ += arr[i].substr(0,1);
    }


    infoBox.innerHTML = "<div id=\"info-head\">\n" +
        "        <i onclick=\"hide()\" class=\"material-icons\">\n" +
        "            clear\n" +
        "        </i>\n" +
        "        <div id=\"Company\">\n" +
        "<div id='avatar'>" + name_ + "</div>\n" +
        "            <h1>" + c_name + "</h1>\n" +
        "        </div>\n" +
        "        <div id=\"info-menu\">\n" +
        "            <a id=\"info\">Info</a>\n" +
        "            <a id=\"employees\">Werknemers</a>\n" +
        "            <a id=\"tasks\">Opties</a>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div id=\"info-main\">\n" + infoMain.innerHTML +
        "    </div>";


    infoMain = document.querySelector("#info-main");
    var info = document.querySelector("#info");
    var employees = document.querySelector("#employees");
    var tasks = document.querySelector("#tasks");


    if (infoBox.style.marginLeft == "calc(100% - 450px)") {

        hide()

    } else {


        infoBox.style.marginLeft = "calc(100% - 450px)";


        info.classList.add("active");
        employees.classList.remove("active");
        tasks.classList.remove("active");
        infoMain.innerHTML = " <div id=\"contact-box\">\n" +
            "            <h1 id='Title'>Gegevens</h1>\n" +
            "            <ul id='gev'>\n" +
            "                <li><i class=\"material-icons\">business</i>" + c_name + "</li>\n" +
            "                <li><i class=\"material-icons\">mail</i>" + c_email + "</li>\n" +
            "                <li><i class=\"material-icons\">smartphone</i>" + c_number + "</li>\n" +
            "            </ul>\n" +
            "        </div>";

        info.addEventListener("click", function () {
            info.classList.add("active");
            employees.classList.remove("active");
            tasks.classList.remove("active");
            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Gegevens</h1>\n" +
                "            <ul id='gev'>\n" +
                "                <li><i class=\"material-icons\">business</i>" + c_name + "</li>\n" +
                "                <li><i class=\"material-icons\">mail</i>" + c_email + "</li>\n" +
                "                <li><i class=\"material-icons\">smartphone</i>" + c_number + "</li>\n" +
                "            </ul>\n" +
                "        </div>";
        });

        employees.addEventListener("click", function () {

            info.classList.remove("active");
            employees.classList.add("active");
            tasks.classList.remove("active");

            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Werknemers</h1>\n" +
                "            <ul id='employees-list'>\n" +
                "                " + text2 + "\n" +
                "            </ul>\n" +
                "        </div>";
            filterCompanies(c_name, id);

        });

        tasks.addEventListener("click", function () {
            info.classList.remove("active");
            employees.classList.remove("active");
            tasks.classList.add("active");
            infoMain.innerHTML = " <div id=\"contact-box\">\n" +
                "            <h1 id='Title'>Opties</h1>\n" +
                "            <ul id='gev'>\n" +
                '                <li><a onclick="editCompany(\'' + id + '\', \'' + c_name + '\', \'' + c_tags + '\', \'' + c_email + '\', \'' + c_number + '\')"><i class="material-icons">edit</i>Edit</a></li>\n' +
                '                <li><a href=\"assets/delete_company.php?id=' + id + '\"><i class="material-icons">delete</i>Verwijderen</a></li>\n' +
                "            </ul>\n" +
                "        </div>";
        });


    }


}


function editContact(id, p_name, p_company, p_function, p_tags, p_email, p_number) {

    var infoBox = document.querySelector("#info-box");
    var i;
    var list = "";
    for (i = 0; i < c_id_array.length; i++) {
        list += "<option value=\"" + c_name_array[i] + "\">" + c_name_array[i] + "</option>";
    }

    infoBox.innerHTML = " <div id=\"info-head\" class=\"newhead\">\n" +
        "        <i onclick=\"hide()\" class=\"material-icons close\">\n" +
        "            clear\n" +
        "        </i>\n" +
        "        <div id=\"NewHeader\">\n" +
        "            <h1>Edit Contact</h1>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div id=\"info-main2\">\n" +
        "        <div id=\"Newbox\">\n" +
        "            <form id=\"form\" method=\"post\" action=\"assets/edit_contact.php?id=" + id + "\">\n" +
        "                <input name=\"name\" value=\"" + p_name + "\" placeholder=\"Name\"><br/>\n" +
        "                <select name=\"company\" value=\"" + p_company + "\" placeholder=\"Company\">\n" + list +
        "                </select><br/>\n" +
        "                <input name=\"function\" value=\"" + p_function + "\"  placeholder=\"function\"><br/>\n" +
        "                <input name=\"tags\" value=\"" + p_tags + "\" placeholder=\"tags\"><br/>\n" +
        "                <input name=\"email\" value=\"" + p_email + "\" placeholder=\"email\"><br/>\n" +
        "                <input name=\"number\" value=\"" + p_number + "\" placeholder=\"number\"><br/>\n" +
        "                <input type=\"submit\" value=\"Verzenden\" name=\"submit\">\n" +
        "            </form>\n" +
        "        </div>\n" +
        "    </div>";


}

function editCompany(id, c_name, c_tags, c_email, c_number) {

    var infoBox = document.querySelector("#info-box");
    var i;
    var list = "";
    for (i = 0; i < c_id_array.length; i++) {
        list += "<option value=\"" + c_name_array[i] + "\">" + c_name_array[i] + "</option>";
    }

    infoBox.innerHTML = " <div id=\"info-head\" class=\"newhead\">\n" +
        "        <i onclick=\"hide()\" class=\"material-icons close\">\n" +
        "            clear\n" +
        "        </i>\n" +
        "        <div id=\"NewHeader\">\n" +
        "            <h1>Edit Contact</h1>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div id=\"info-main2\">\n" +
        "        <div id=\"Newbox\">\n" +
        "            <form id=\"form\" method=\"post\" action=\"assets/edit_company.php?id=" + id + "\">\n" +
        "                <input name=\"name\" value=\"" + c_name + "\"  placeholder=\"Name\"><br/>\n" +
        "                <input name=\"tags\" value=\"" + c_tags + "\" placeholder=\"tags\"><br/>\n" +
        "                <input name=\"email\" value=\"" + c_email + "\" placeholder=\"email\"><br/>\n" +
        "                <input name=\"number\" value=\"" + c_number + "\" placeholder=\"number\"><br/>\n" +
        "                <input type=\"submit\" value=\"Verzenden\" name=\"submit\">\n" +
        "            </form>\n" +
        "        </div>\n" +
        "    </div>";


}

function newContact() {

    var infoBox = document.querySelector("#info-box");
    var i;
    var list = "";
    for (i = 0; i < c_id_array.length; i++) {
        list += "<option value=\"" + c_name_array[i] + "\">" + c_name_array[i] + "</option>";
    }

    infoBox.innerHTML = " <div id=\"info-head\" class=\"newhead\">\n" +
        "        <i onclick=\"hide()\" class=\"material-icons close\">\n" +
        "            clear\n" +
        "        </i>\n" +
        "        <div id=\"NewHeader\">\n" +
        "            <h1>Nieuw Contact</h1>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div id=\"info-main2\">\n" +
        "        <div id=\"Newbox\">\n" +
        "            <form id=\"form\" method=\"post\" action=\"assets/new_contact.php\">\n" +
        "                <input name=\"name\" placeholder=\"Name\"><br/>\n" +
        "                <select name=\"company\" placeholder=\"Company\">\n" + list +
        "                </select><br/>\n" +
        "                <input name=\"function\" placeholder=\"function\"><br/>\n" +
        "                <input name=\"tags\" placeholder=\"tags\"><br/>\n" +
        "                <input name=\"email\" placeholder=\"email\"><br/>\n" +
        "                <input name=\"number\" placeholder=\"number\"><br/>\n" +
        "                <input type=\"submit\" value=\"Verzenden\" name=\"submit\">\n" +
        "            </form>\n" +
        "        </div>\n" +
        "    </div>";


    if (infoBox.style.marginLeft == "calc(100% - 450px)") {

        hide()

    } else {


        infoBox.style.marginLeft = "calc(100% - 450px)";


    }

}


function newCompany() {

    var infoBox = document.querySelector("#info-box");

    infoBox.innerHTML = " <div id=\"info-head\" class=\"newhead\">\n" +
        "        <i onclick=\"hide()\" class=\"material-icons close\">\n" +
        "            clear\n" +
        "        </i>\n" +
        "        <div id=\"NewHeader\">\n" +
        "            <h1>Nieuw Bedrijf</h1>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div id=\"info-main2\">\n" +
        "        <div id=\"Newbox\">\n" +
        "            <form id=\"form\" method=\"post\" action=\"assets/new_company.php\">\n" +
        "                <input name=\"name\" placeholder=\"Name\"><br/>\n" +
        "                <input name=\"tags\" placeholder=\"tags\"><br/>\n" +
        "                <input name=\"email\" placeholder=\"email\"><br/>\n" +
        "                <input name=\"number\" placeholder=\"number\"><br/>\n" +
        "                <input type=\"submit\" value=\"Verzenden\" name=\"submit\">\n" +
        "            </form>\n" +
        "        </div>\n" +
        "    </div>";


    if (infoBox.style.marginLeft == "calc(100% - 450px)") {

        hide()

    } else {


        infoBox.style.marginLeft = "calc(100% - 450px)";


    }


}


function newCustomer() {

    document.querySelector("#content").innerHTML = "<div id=\"info-bar\">\n" +
        "            <h1 id=\"Location\">Nieuwe Klant</h1>\n" +
        "        </div>\n" +
        "        <form class=\"container\" action=\"assets/includes/factuur/pdf.php\" method=\"POST\">\n" +
        "            <div class=\"informatie\">\n" +
        "                <div class=\"input_row\">\n" +
        "                    <input class=\"input_field\" name=\"name\" type=\"text\" placeholder=\"Naam\" id=\"big\" required/>\n" +
        "                </div>\n" +
        "                <div class=\"input_row\">\n" +
        "                    <input class=\"input_field\" name=\"number\" type=\"text\" placeholder=\"Telefoonnummer\" id=\"big2\" required/>\n" +
        "                    <input class=\"input_field\" name=\"email\" type=\"email\" placeholder=\"Email\" id=\"big\" required/>\n" +
        "                </div>\n" +
        "                <div class=\"input_row\">\n" +
        "                    <input class=\"input_field\" name=\"street\" type=\"text\" placeholder=\"Adres\" id=\"big\" required/>\n" +
        "                    <input class=\"input_field\" name=\"zip\" type=\"text\" placeholder=\"Postcode\" id=\"postcode\"required />\n" +
        "                    <input class=\"input_field\" name=\"city\" type=\"text\" placeholder=\"Plaatsnaam\" id=\"plaats\"required />\n" +
        "                </div>\n" +
        "\n" +
        "                <div class=\"input_row\">\n" +
        "                    <input class=\"input_field\" name=\"country\" type=\"text\" placeholder=\"Land\" id=\"telefoon\"required />\n" +
        "                </div>\n" +
        "\n" +
        "            </div>\n" +
        "            <!-- Add Products -->\n" +
        "            <div class=\"Producten\">\n" +
        "\n" +
        "\n" +
        "\n" +
        "                <TABLE class=\"table\">\n" +
        "                    <thead>\n" +
        "                    <tr class=\"row1\">\n" +
        "                        <th class=\"product\">Omschrijving</th>\n" +
        "                        <th class=\"amount\">Aantal</th>\n" +
        "                        <th class=\"price\">Prijs</th>\n" +
        "                        <th class='total'>Totaal</th>\n" +
        "                    </tr>\n" +
        "                    </thead>\n" +
        "                    <tbody id=\"dataTable\">\n" +
        "\n" +
        "                    </tbody>\n" +
        "\n" +
        "                </table>\n" +
        "\n" +
        "                <INPUT type=\"button\" value=\"Rij toevoegen\" id=\"add\" onClick=\"addRow2('dataTable')\" />\n" +
        "\n" +
        "                <table class=\"totaaltable\">\n" +
        "                    <thead>\n" +
        "                    <tr>\n" +
        "                        <th class=\"totaltext\">Totaal excl.</th>\n" +
        "                        <th><input class=\"totalfield\" disabled name=\"\" id=\"firstTotal\"></th>\n" +
        "                        <th><input hidden name=\"tot_ex\" id=\"tot_ex\"></th>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <th class=\"totaltext\">BTW %</th>\n" +
        "                        <th><input class=\"totalfield\" name=\"btw\" id=\"btw\" value=\"21\" required></th>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <th class=\"totaltext\">Totaal incl.</th>\n" +
        "                        <th><input disabled class=\"totalfield\" name=\"\" id=\"secondTotal\"></th>\n" +
        "                        <th><input hidden name=\"tot_inc\" id=\"tot_inc\"></th>\n" +
        "                    </tr>\n" +
        "                    </thead>\n" +
        "                </table>\n" +
        "\n" +
        "                <button id=\"submit\" value=\"Verzenden\" type=\"submit\">Versturen</button>\n" +
        "            </div>\n" +
        "        </form>";
    addRow2('dataTable');
}



//Calculates to grand total of all the products
function grandTotal() {
    g_total = 0;

    $("input").change(function () {
        g_total = 0;
        $('input.total').each(function () {
            g_total += eval($(this).val());
            var firstTotal = g_total;
            var btw = $('#btw').val();
            var secondTotal = g_total * (1 + (btw / 100));
            $('#firstTotal').val(firstTotal.toFixed(2));
            $('#tot_ex').val(firstTotal.toFixed(2));
            $('#tot_inc').val(secondTotal.toFixed(2));
            $('#secondTotal').val(secondTotal.toFixed(2));

        });
    });
};

//Defines the product input field
function addRow2(tableid) {
    var table = $('#' + tableid);
    rowCount = table.children().length;
    newrow = '<tr class="dataRow row2"><td><input class="box1" type="text" name="product[]" required></td><td><input type="text" step="any" class="amount box2" min="1" onchange="calc2($(this))" name="amount[]"required></td><td><input type="text" step="any" min="0" value="" class="price box3 input-icon" name="price[]" onchange="calc2($(this));"required></td><td><input disabled type="text"  value="" class="total box4" name="total[]"></td><td><a type="button" class="delbtn"><i class="fas fa-trash-alt"></i></a></td></tr>';
    table.append(newrow);
}


//Calculates row total
function calc2(_row) {
    row = _row.closest('.dataRow');
    qty = row.find('.amount').val();
    price = row.find('.price').val();
    total = parseFloat(qty) * parseFloat(price);
    row.closest('.dataRow').find('.total').val(total.toFixed(2));
    grandTotal();
}


//Makes the delete button only function when there is more than 1 row
$('.table tbody').on('click', '.delbtn', function () {
    var rowAmount = document.getElementById("dataTable").rows.length;
    if (rowAmount != 1) {
        $(this).closest('tr').remove();
    } else {

    }
    ;
});

