function callbackHell() {
  setTimeout(() => {
    const data = {user: "Thea Helena"}
    console.log(data)
    setTimeout(() => {
      console.log("Data has been updated")
    }, 1000);
  }, 500);
}

callbackHell()