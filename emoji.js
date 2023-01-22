background(255, 255, 255);
noStroke();

//Emoji background (yellow circle)
fill(255, 200, 0);
ellipse(300, 310, 300);

//Eyes (white part)
fill(255, 255, 255);
ellipse(245, 260, 85);
ellipse(360, 260, 50);

//Eyes (black part/pupils)
fill(0, 0, 0);
ellipse(245, 260, 40);
ellipse(360, 260, 20);

//Mouth

fill(255, 30, 100);
rect(245, 333, 149, 70, 105);

//Teeth
fill(255, 255, 255);
rect(275, 333, 14, 20, 0, 0, 105);
rect(325, 383, 14, 20, 105, 105, 0, 0);

//Hat
fill(160, 82, 45);
rotate(PI / 50);
rect(198, 113, 230, 70, 150, 150, 0, 0);
rotate(PI / 150);
rect(115, 173, 380, 20, 105);
