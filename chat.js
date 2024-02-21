document.addEventListener("DOMContentLoaded", function() {
  const chatContainer = document.getElementById("chat-container");
  const userInput = document.getElementById("user-input");

  function getRandomResponse() {
    const responses = [
      "Hmm, interesante...",
      "No estoy seguro de entender completamente.",
      "Eso es algo para reflexionar.",
      "¿Puedes elaborar un poco más?",
      "Tal vez sí, tal vez no.",
      "¿Qué piensas tú al respecto?",
      "No tengo una respuesta definitiva para eso.",
      "Es complicado.",
      "¿Has considerado todas las posibilidades?",
      "Depende de la perspectiva.",
      "No puedo afirmar ni negar eso.",
      "¿Qué opinas tú?",
      "Las respuestas no siempre son simples.",
      "Quizás en otro momento pueda darte una respuesta más clara.",
      "No tengo la respuesta definitiva, pero es fascinante.",
      "¿Qué te sugiere esa pregunta?",
      "En este momento tengo cosas mas importantes",
      "La verdad es relativa.",
      "Necesito más información para responder adecuadamente.",
      "Las respuestas a veces están en el proceso de búsqueda."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }

  function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight; // Desplazar hacia abajo para mostrar el último mensaje
  }

  function handleUserInput() {
    const userQuestion = userInput.value.trim();
    if (userQuestion) {
      addMessage(userQuestion, "user");
      userInput.value = ""; // Limpiar el input después de enviar la pregunta

      setTimeout(function() {
        const botResponse = getRandomResponse();
        addMessage(botResponse, "bot");
      }, 500);
    }
  }

  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });

  handleUserInput(); // Para iniciar con una respuesta del bot al cargar la página
});