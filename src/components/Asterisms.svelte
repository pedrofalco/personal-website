<script>
    import P5 from 'p5-svelte';
	import { onMount } from 'svelte';

    let target, width, height;
    onMount(()=>{
        width = target.clientWidth;
        height = target.clientHeight;
    })
    function random_hash() {
        let chars = "0123456789abcdef";
        let result = "";
        for (let i = 64; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    let tokenData = {
        hash: random_hash(),
        tokenId: "0",
    };
    var c,
        min_dim,
        size,
        minSpeed,
        maxSpeed,
        minSize,
        maxSize,
        textWidth,
        lineWeight,
        alphaL,
        backgroundB,
        backgroundG,
        backgroundR,
        linkForce,
        starMax,
        colorLink,
        colorR,
        colorG,
        colorB,
        alphaK,
        alphaX,
        mx,
        hash = tokenData.hash,
        tokenID = hash,
        sourceText = "",
        textY = 20,
        textX = 15,
        iniStars = [],
        starCount = 0,
        starPos = new Array(starCount),
        starMaxV = new Array(starCount),
        starVel = new Array(starCount),
        starSize = new Array(starCount),
        starR = new Array(starCount),
        starG = new Array(starCount),
        starB = new Array(starCount),
        sf = 1,
        my = 0;

        const sketch = (p5) => {
            
            p5.setup = () => {
                    (c = p5.createCanvas(width, width / 1.8)),
                    // c.mouseWheel(zoom),
                    (min_dim = p5.min(width, c.height)),
                    (size = min_dim / 390 / 2),
                    p5.randomSeed(parseInt(tokenData.hash.slice(0, 16), 16)),
                    p5.frameRate(20),
                    p5.colorMode(p5.RGB, 255, 255, 255, 100),
                    p5.ellipseMode(p5.RADIUS),
                    (iniStars = p5.round(p5.random(90, 150))),
                    (starMax = 1e3),
                    (minSize = p5.round(p5.random(0.25 * size, 0.8 * size), 4)),
                    (maxSize = p5.round(p5.random(2 * size, 7 * size), 4)),
                    (minSpeed = p5.round(p5.random(0.05 * size, 0.1 * size), 4)),
                    (maxSpeed = p5.round(p5.random(0.15 * size, 0.2 * size), 4)),
                    (linkForce = p5.round(p5.random(50 * size, 65 * size), 4)),
                    (colorLink = p5.random(12, 240)),
                    (lineWeight = p5.round(p5.random(0.25 * size, 1.5 * size), 4)),
                    (colorR = p5.random(50, 255)),
                    (colorG = p5.random(50, 255)),
                    (colorB = p5.random(50, 255)),
                    (alphaL = p5.random(200, 255)),
                    (backgroundB = p5.random(0, 35)),
                    (backgroundR = p5.random(0, 35)),
                    (backgroundG = p5.random(0, 35)),
                    (sourceText = tokenID);
                for (var r = 0; r < iniStars; r++) newStar();
            }

            p5.draw = () => {
                p5.blendMode(p5.BLEND),
                    p5.background(backgroundR, backgroundG, backgroundB, 255),
                    p5.blendMode(p5.SCREEN),
                    p5.textSize(13 * size),
                    p5.noStroke(),
                    p5.fill(255),
                    p5.textFont("JetBrains Mono"),
                    p5.text(sourceText, size * textX, size * textY, 490 * size, 100 * size),
                    textWidth > 490 && (textY = 100),
                    p5.mouseX <= p5.width &&
                        p5.mouseX >= 0 &&
                        p5.mouseY <= p5.height &&
                        p5.mouseY >= 0 &&
                        ((mx = p5.mouseX), (my = p5.mouseY)),
                    p5.translate(mx, my),
                    p5.scale(sf),
                    p5.translate(-mx, -my),
                    p5.mouseIsPressed && starCount <= starMax && newStar();
                for (var r = 0; r < starCount; r++) {
                    p5.noStroke();
                    var e = p5.map(
                        p5.dist(p5.width / 2, p5.height / 2, starPos[r].x, starPos[r].y),
                        180,
                        360 * size,
                        360 * size,
                        180
                    );
                    p5.fill(colorR + 75, colorG + 75, colorB + 75, e + 75),
                        p5.ellipse(starPos[r].x, starPos[r].y, starSize[r], starSize[r]);
                }
                for (r = 0; r < starCount; r++) {
                    e = p5.map(
                        p5.dist(p5.width / 2, p5.height / 2, starPos[r].x, starPos[r].y),
                        180,
                        360 * size,
                        360 * size,
                        180
                    );
                    for (var s = r + 1; s < starCount; s++)
                        if (
                            p5.dist(starPos[r].x, starPos[r].y, starPos[s].x, starPos[s].y) <
                                linkForce &&
                            p5.dist(p5.width / 2, p5.height / 2, starPos[s].x, starPos[s].y) < 360
                        ) {
                            var t = 0.6;
                            (t = p5.map(t, 1, -1, 0, alphaL)),
                                p5.line(starPos[r].x, starPos[r].y, starPos[s].x, starPos[s].y),
                                p5.stroke(colorR, colorG, colorB, e),
                                p5.strokeWeight(lineWeight);
                        }
                }
                for (r = 0; r < starCount; r++) {
                    var o = starPos[r].x + starVel[r].x,
                        a = starPos[r].y + starVel[r].y;
                    (starPos[r].x = o),
                        (starPos[r].y = a),
                        (o < 0 || o > size * min_dim) &&
                            ((starVel[r].x *= -1), (o = starPos[r].x + starVel[r].x)),
                        (a < 0 || a > size * min_dim) &&
                            ((starVel[r].y *= -1), (a = starPos[r].y + starVel[r].y));
                }
            }

            p5.keyTyped = () => {
                "Enter" == p5.key
                    ? (sourceText = sourceText)
                    : sourceText == tokenID
                    ? (sourceText = p5.key)
                    : " " == p5.key
                    ? (sourceText = sourceText.substring(0, sourceText.length + 1 - 1))
                    : (sourceText += p5.key);
            }
            p5.keyPressed = () => {
                32 === p5.keyCode
                    ? (sourceText += " ")
                    : 8 === p5.keyCode
                    ? (sourceText = sourceText.substring(0, sourceText.length - 1))
                    : 46 === p5.keyCode
                    ? (sourceText = "")
                    : 13 === p5.keyCode && p5.saveCanvas(sourceText + " asterism", "png");
            }

            function newStar() {
                if (starCount < iniStars) {
                    starPos.push(
                        p5.createVector(
                            p5.random(0, width),
                            p5.random(0, width / 1.8)
                        )
                    );
                    var r = p5.random(minSpeed, maxSpeed);
                    starMaxV.push(r),
                        starVel.push(p5.createVector(p5.random(-r, r), p5.random(-r, r))),
                        starSize.push(p5.random(minSize, maxSize)),
                        starR.push(p5.round(p5.random(0, 255))),
                        starG.push(p5.round(p5.random(0, 255))),
                        starB.push(p5.round(p5.random(0, 255))),
                        starCount++;
                } else {
                    starPos.push(p5.createVector(p5.mouseX, p5.mouseY));
                    r = p5.random(minSpeed, maxSpeed);
                    starMaxV.push(r),
                        starVel.push(p5.createVector(p5.random(-r, r), p5.random(-r, r))),
                        starSize.push(p5.random(minSize, maxSize)),
                        starR.push(p5.round(p5.random(0, 255))),
                        starG.push(p5.round(p5.random(0, 255))),
                        starB.push(p5.round(p5.random(0, 255))),
                        starCount++;
                }
            }

            function zoom(r) {
                r.preventDefault();
                sf > 1 && r.deltaY > 0
                    ? (sf *= 0.95)
                    : sf < 0.99
                    ? (sf = 0.99)
                    : sf > 5 && r.deltaY < 0
                    ? (sf *= 1)
                    : r.deltaY < 0 && (sf *= 1.05),
                    !1;
            }
        }


</script>

<div class="w-full mx-auto" bind:this={target}>
    <P5 {sketch} {target} />
</div>
