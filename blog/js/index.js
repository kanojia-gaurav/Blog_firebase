 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAkuKnoFguNh_lM5XmNhUt8VrSXkAqbxo0",
    authDomain: "project-39aaa.firebaseapp.com",
    databaseURL: "https://project-39aaa.firebaseio.com",
    projectId: "project-39aaa",
    storageBucket: "project-39aaa.appspot.com",
    messagingSenderId: "1076990778072",
    appId: "1:1076990778072:web:19afc4bd31612171e615ad",
    measurementId: "G-LCPR5TBJRF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();

      if(email !="" && password!="")
      {
        var result = firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errormessage = error.message;

            console.log(errorCode);
            console.log(errormessage);
            window.alert("Message: "+errormessage);
            
        });
      }
      else
      {
        window.alert("Fill out all fields");
      }
  });


  $("#btn-logout").click(function()
  {
        firebase.auth().signOut();
  });

  $("#btn-signup").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#confimpassword").val();
    if(email !="" && password!="" && cpassword!="")
    {
      if(password == cpassword)
      {
        var result = firebase.auth().createUserWithEmailAndPassword(email,password);

          result.catch(function(error)
          {
              var errorCode = error.code;
              var errormessage = error.message;

              console.log(errorCode);
              console.log(errormessage);
              window.alert("Message: "+errormessage);
              
          });

      }
      else{
        window.alert("password do not match");
      }
  }
  else
  {
    window.alert("fill out all fields");
  }
  
  });


  $("#btn-resetpassword").click(function()    
  {
        var auth = firebase.auth();
        var email = $("#email").val();

        if(email !="")
        {
          auth.sendPasswordResetEmail(email).then(function()
          {
            window.alert("Email has been sent to you");
          })
          .catch(function(error)
          {
            var errorCode = error.code;
              var errormessage = error.message;

              console.log(errorCode);
              console.log(errormessage);
              window.alert("Message: "+errormessage);

          });
        }
        else
        {
          window.alert("Please enter your Email");
        }
  });


  $("#btn-update").click(function()
  {
    var phone = $("#phone").val();
    var address = $("#address").val();
    var bio = $("#bio").val();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var country = $("#country").val();
    var gender = $("#gender").val();
    
    var rootref = firebase.database().ref().child("Users");
    var userid = firebase.auth().currentUser.uid;
    var usersref = rootref.child(userid);

    if(firstname !="" && lastname !="" && phone!="" && bio!="" && country!="" && gender!="" && address!="")
    {
      var userdata =
      {
        "phone" : phone,
        "address":address,
        "firstname":firstname,
        "lastname":lastname,
        "country": country,
        "gender": gender,
        "bio": bio,

      }

      usersref.set(userdata,function(error)
      {
        if(error)
        {
              var errorCode = error.code;
              var errormessage = error.message;

              console.log(errorCode);
              console.log(errormessage);
              window.alert("Message: "+errormessage);

        }
        else
        {
          window.location.href="Mainpage.html";

        }
      });
    }
    else
    {
      window.alert("fill out all fields");
    }
  });


  function switchview(view)
  {
    $.get({
      url: view,
      cache:false,
    })
    .then(function(data)
    {
      $("#container").html(data);
    });
  }