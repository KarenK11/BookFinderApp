const button = document.querySelector(".btn-primary");
        const isbn = document.querySelector(".isbn");
        const auto = document.querySelector(".auto");

        button.addEventListener("click",initialiase);

        google.books.load({"language":"en"});

        function nextStep(viewer){
          window.setTimeout(function(){
            viewer.nextPage()
            nextStep(viewer);
          },3000)
        }

        function alertNotFound(){
          alert("Book not found!");
        }

        function initialiase(){
          var viewer = new google.books.DefaultViewer(document.getElementById("viewerCanvas"));
          viewer.load("ISBN:"+isbn.value,alertNotFound);
          auto.addEventListener("click",nextStep(viewer));
        }

        google.books.setOnLoadCallback(initialiase);
