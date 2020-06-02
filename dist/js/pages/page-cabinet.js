window.onload = () => {
    const token = localStorage.getItem("token");

    if (token) {
        const url = "http://localhost:3000/api/user-info";

        axios(url, { params: { token } })
            .then(response => {
                const userInfo = response.data.user;

                // DISPLAYING INFO
                document.querySelector("#account-id").textContent = userInfo._id ?? "Not specified";
                document.querySelector("#username").textContent = userInfo.userName ?? "Not specified";
                document.querySelector("#title-user").textContent = userInfo.userName ?? "Not specified";
                document.querySelector("#realname").textContent = userInfo.realName ?? "Not specified";
                document.querySelector("#email").textContent = userInfo.email ?? "Not specified";

                document.querySelector("#birthday-date").textContent =
                    userInfo.dateOfBirthday === "" || userInfo.dateOfBirthday === null ?
                        "Not specified" : userInfo.dateOfBirthday.split("-").reverse().join(".");

                document.querySelector("#phone-number").textContent =
                    userInfo.phoneNumber === "" || userInfo.phoneNumber === null ?
                        "Not specified" : userInfo.phoneNumber;

                document.querySelector("#country").textContent =
                    userInfo.country === "" || userInfo.country === null ?
                        "Not specified" : userInfo.country;

                document.querySelector("#city").textContent =
                    userInfo.city === "" || userInfo.city === null ?
                        "Not specified" : userInfo.city;

                document.querySelector("#registration-date").textContent =
                    userInfo.dateOfRegistration ?? "Not specified";

                document.querySelector("#bets-done").textContent = userInfo.bets.length;

                if (userInfo.isPremium) {
                    document.querySelector("#title-premium")
                        .classList.add("page-cabinet__premium-title--active");
                    document.querySelector("#title-premium")
                        .classList.remove("page-cabinet__premium-title--disabled");
                } else {
                    document.querySelector("#title-premium")
                        .classList.remove("page-cabinet__premium-title--active");
                    document.querySelector("#title-premium")
                        .classList.add("page-cabinet__premium-title--disabled");
                }
                document.querySelector("#balance").textContent = userInfo.balance ?? 320;
            })
            .catch(error => {
                console.log(error);
            })

        document.querySelector("#btn-logout").addEventListener("click", e => {
            localStorage.clear();
            window.location.replace('http://127.0.0.1:8080/login.html');
        });

    } else {
        const cabinet = document.querySelector(".page-cabinet .row");

        cabinet.innerHTML = "";

        const accessDenied = document.createElement("div");
        accessDenied.className = "page__access-denied";
        accessDenied.textContent = "You are not authenticated and don't have permissions to view this page";

        cabinet.appendChild(accessDenied);

        window.location.replace('http://127.0.0.1:8080/login.html');
    }
};