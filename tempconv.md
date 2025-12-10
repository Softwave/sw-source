---
title: Temperature Converter
layout: app.html
tags: 
date: 2025-12-10
---

# Temperature Converter 

Simple temperature conversion.

<div class="calculator">
        <input type="number" inputmode="numeric" id="inputValue" placeholder="Enter temperature">
        
        <div id="buttons">
            <button id="convToC">Fahrenheit → Celsius</button>
            <button id="convToF">Celsius → Fahrenheit</button>
        </div>
        
        <div id="result">Result: N/A</div>
    </div>

    
<script>

class Particle {
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  createParticle() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    circle(this.x,this.y,this.r);
  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }


  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  for(let i = 0; i < width / 10; i++){
    particles.push(new Particle());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  particles = [];
  for(let i = 0; i < width / 10; i++){
    particles.push(new Particle());
  }
}

function draw() {
  background('#5956c8');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
    


    // Using jQuery 
    $(document).ready(function() {
        // Conversion: Fahrenheit to Celsius
        function convertToCelsius() {
            var fahrenheit = parseFloat($("#inputValue").val());
            if (isNaN(fahrenheit) || $("#inputValue").val().trim() === '') {
                $("#result").text("Result: Error. ⚠️");
                return;
            }
            var celsius = (fahrenheit - 32) * (5 / 9);
            $("#result").text(`Result: ${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
        }

        // Conversion: Celsius to Fahrenheit
        function convertToFahrenheit() {
            var celsius = parseFloat($("#inputValue").val());
            if (isNaN(celsius) || $("#inputValue").val().trim() === '') {
                $("#result").text("Result: Error. ⚠️");
                return;
            }
            var fahrenheit = (celsius * (9 / 5)) + 32;
            $("#result").text(`Result: ${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
        }

        // Attach to buttons
        $("#convToC").click(function() {
            convertToCelsius();
        });
        $("#convToF").click(function() {
            convertToFahrenheit();
        });

    });
</script>