// Código de lluvia
        document.addEventListener('DOMContentLoaded', function() {
            const codeRain = document.querySelector('.code-rain');
            const codeSnippets = [
                'function hello() { return "Hola Mundo!"; }',
                'const sum = (a, b) => a + b;',
                'class Persona { constructor(nombre) { this.nombre = nombre; } }',
                'const data = await fetch("/api");',
                'import React from "react";',
                'console.log("Debugging");',
                '#include <stdio.h> int main() { printf("Hola"); }',
                '<div className="app"></div>',
                'String nombre = "Estudiante";',
                'for(let i=0; i<10; i++) { console.log(i); }',
                'def factorial(n): return 1 if n==0 else n*factorial(n-1)',
                'docker build -t myapp .',
                'git commit -m "Initial commit"',
                'printf("Hola %s", "Mundo");',
                'SELECT * FROM usuarios;',
                'npm start',
                'response.json()',
                'padding: 0; margin: 0;',
                '<Route path="/" component={Home} />',
                'try { ... } catch(err) { ... }'
            ];
            
            // Crear líneas de código
            for (let i = 0; i < 30; i++) {
                const line = document.createElement('div');
                line.className = 'code-line';
                line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                line.style.left = Math.random() * 100 + '%';
                line.style.animationDuration = (5 + Math.random() * 15) + 's';
                line.style.animationDelay = (Math.random() * 5) + 's';
                codeRain.appendChild(line);
            }
            
            // Partículas interactivas
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 5 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                particle.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                const keyframes = `
                    @keyframes float {
                        0% { transform: translate(0, 0); opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); opacity: 0; }
                    }
                `;
                
                const style = document.createElement('style');
                style.innerHTML = keyframes;
                document.head.appendChild(style);
                
                particlesContainer.appendChild(particle);
            }
            
            // Juego de teclear código
            const codeInput = document.getElementById('codeInput');
            const codeSample = document.getElementById('codeSample');
            const cursor = document.getElementById('cursor');
            const gameFeedback = document.getElementById('gameFeedback');
            
            let targetCode = `function greet() {
  const name = "Visitante";
  return \`Hola \${name}, bienvenido a mi portafolio!\`;
}`;
            
            codeInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const userCode = codeInput.value.trim();
                    
                    if (userCode === 'greet()') {
                        gameFeedback.textContent = '¡Correcto! La función devuelve: "' + eval(targetCode + '\n' + userCode) + '"';
                        gameFeedback.className = 'mt-2 text-sm text-green-400';
                        gameFeedback.classList.remove('hidden');
                        
                        // Cambiar el código después de un tiempo
                        setTimeout(() => {
                            const newCodes = [
                                `const sum = (a, b) => a + b;`,
                                `class Person { constructor(name) 
                                { this.name = name; } greet() 
                                 { return 'Hola ' + this.name; } }`
                            ];
                            
                            const randomCode = newCodes[Math.floor(Math.random() * newCodes.length)];
                            targetCode = randomCode;
                            codeSample.textContent = randomCode;
                            codeInput.value = '';
                            gameFeedback.classList.add('hidden');
                        }, 2000);
                    } else {
                        gameFeedback.textContent = 'Intenta llamar a la función greet()';
                        gameFeedback.className = 'mt-2 text-sm text-red-400';
                        gameFeedback.classList.remove('hidden');
                    }
                }
            });
            
            // Menú móvil
            const menuBtn = document.getElementById('menuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            
            menuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    mobileMenu.classList.add('hidden');
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Efecto de máquina de escribir para el título
            if (window.innerWidth > 768) {
                const typewriterElement = document.querySelector('.typewriter h1');
                typewriterElement.style.animation = 'none';
                setTimeout(() => {
                    typewriterElement.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
                }, 50);
            }
        });


emailjs.init("YbKL6rMbBEdz3mQyS"); // Reemplaza con tu clave pública

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_00e5pek", "template_pqb4cpo", this)
    .then(() => {
      alert("✅ Mensaje enviado con éxito.");
      this.reset();
    }, (error) => {
      alert("❌ Hubo un error al enviar el mensaje.");
      console.error("Error:", error);
    });
});
