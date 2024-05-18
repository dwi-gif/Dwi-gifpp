document.addEventListener("DOMContentLoaded", function() {
      const startButton = document.getElementById('startButton');
      const gameArea = document.getElementById('gameArea');
      const angryDiv = document.querySelector('.angry');
      const hintDiv = document.getElementById('hint');
      const questionElement = document.getElementById('question');
      const answerElement = document.getElementById('answer');
      const resultElement = document.getElementById('result');

      let currentQuestionIndex = 0;

      startButton.addEventListener('click', function() {
        startButton.style.display = 'none';
        gameArea.style.display = 'block';
        startGame();
      });

      function startGame() {
        const questions = [
          { question: "Siapa presiden Indonesia saat ini?", answer: "Jokowi", hint: "Awalan depannya 'Jo'" },
          { question: "Berapa jumlah provinsi di Indonesia?", answer: "34", hint: "Lebih dari 30" },
          { question: "Apa nama ibukota Indonesia?", answer: "Jakarta", hint: "Dimulai dengan 'Ja'" },
          { question: "Apa warna langit di siang hari?", answer: "Biru", hint: "Warna yang sering dikaitkan dengan laut" },
          { question: "Apa nama binatang yang memiliki garis-garis hitam putih?", answer: "Zebra", hint: "Nama mirip dengan karakter kartun dari DreamWorks" },
          { question: "Apa nama bulan yang terdekat dengan Bumi?", answer: "Bulan", hint: "Kamu bisa melihatnya di malam hari" },
          { question: "Siapakah penemu lampu pijar?", answer: "Thomas Edison", hint: "Nama belakangnya mirip dengan nama motor Honda" },
          { question: "Berapa jumlah huruf dalam abjad?", answer: "26", hint: "Angka yang lebih besar dari 20" },
          { question: "Apa nama sungai terpanjang di dunia?", answer: "Amazon", hint: "Nama mirip dengan perusahaan e-commerce besar" },
          { question: "Apa nama negara yang memiliki luas wilayah terbesar di dunia?", answer: "Rusia", hint: "Berada di benua Eropa dan Asia" },
          { question: "Berapa jumlah warna dalam pelangi?", answer: "Tujuh", hint: "Angka yang sering dikaitkan dengan hari dalam seminggu" },
          { question: "Apa nama hewan yang memiliki belalai panjang?", answer: "Gajah", hint: "Nama mirip dengan mobil mewah asal Jerman" },
          { question: "Siapakah tokoh utama dalam novel 'Matahari' karya Tere Liye?", answer: "Adrian", hint: "Nama tokoh dimulai dengan huruf 'A' dan diikuti oleh huruf 'd'." },
{ question: "Berapakah hasil dari 15 dikurangi 7?", answer: "8", hint: "Jawabannya adalah angka bulat." },
{ question: "Apa nama planet yang terletak paling dekat dengan Matahari?", answer: "Merkurius", hint: "Namanya mirip dengan dewa mitologi Romawi yang merupakan dewa perang." },
{ question: "Apa warna daun ketika musim gugur tiba?", answer: "Merah", hint: "Warna ini sering dihubungkan dengan kesan hangat dan kemerahan." },
{ question: "Siapakah presiden pertama Republik Indonesia?", answer: "Soekarno", hint: "Nama belakangnya dimulai dengan huruf 'S'." },
{ question: "Apa warna langit ketika matahari terbenam?", answer: "Merah", hint: "Warna ini sering dikaitkan dengan romantisme senja." },
{ question: "Apa nama tokoh utama dalam novel 'Harry Potter'?", answer: "Harry Potter", hint: "Nama belakangnya sama dengan judul novelnya." },
{ question: "Apa warna daun ketika musim semi tiba?", answer: "Hijau", hint: "Warna ini melambangkan kesegaran dan kehidupan baru." },
{ question: "Berapakah hasil dari 8 ditambah 5?", answer: "13", hint: "Jumlah dari angka ini merupakan angka prima." },
{ question: "Siapakah penulis novel 'Laskar Pelangi'?", answer: "Andrea Hirata", hint: "Nama belakangnya dimulai dengan huruf 'H'." },
{ question: "Apa nama hewan yang memiliki bulu-bulu yang berwarna-warni?", answer: "Burung", hint: "Hewan ini sering dihubungkan dengan keindahan suara bernyanyi." },
{ question: "Apakah benua terbesar di dunia?", answer: "Asia", hint: "Benua ini juga merupakan benua dengan populasi terbanyak di dunia." },
{ question: "Siapakah penulis lagu 'Imagine'?", answer: "John Lennon", hint: "Nama belakangnya sama dengan salah satu anggota The Beatles." },
{ question: "Apakah nama hewan yang memiliki sirip dan bersifat ganas?", answer: "Hiu", hint: "Hewan ini sering dijadikan ikon film-film bertema bawah laut." },
{ question: "Apa warna bendera Amerika Serikat?", answer: "Merah, Putih, Biru", hint: "Warna ini juga melambangkan nilai-nilai kebebasan dan keadilan." }

          // Tambahkan 88 pertanyaan lagi di sini
        ];

        // Cek apakah ada progres yang disimpan sebelumnya
        const savedProgress = localStorage.getItem('currentQuestionIndex');
        if (savedProgress !== null) {
          currentQuestionIndex = parseInt(savedProgress);
        }

        displayQuestion();

        function displayQuestion() {
          questionElement.textContent = questions[currentQuestionIndex].question;
          hintDiv.textContent = "Hint: " + questions[currentQuestionIndex].hint;
        }

        document.getElementById('submit').addEventListener('click', function() {
          const userAnswer = answerElement.value.trim();
          const correctAnswer = questions[currentQuestionIndex].answer;

          if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            resultElement.textContent = "Jawaban benar!";
            angryDiv.style.display = 'none'; // Hide angry message
          } else {
            resultElement.textContent = "Jawaban salah. Coba lagi!";
            angryDiv.style.display = 'block'; // Show angry message
          }

          // Move to the next question or end the game
          if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
            answerElement.value = ''; // Clear the input field
          } else {
            resultElement.textContent += " Permainan selesai!";
            answerElement.disabled = true;
            document.getElementById('submit').disabled = true;
            hintDiv.style.display = 'none'; // Hide hint after game ends
          }

          // Simpan progres setelah menjawab pertanyaan
          localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
        });

        document.getElementById('save').addEventListener('click', function() {
          // Simpan progres saat tombol "Save" ditekan
          localStorage.setItem('currentQuestionIndex', currentQuestionIndex);
          alert("Progress saved!");
        });
      }
    });