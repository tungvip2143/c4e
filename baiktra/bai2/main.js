function numberOneTriangle(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write('*')
        }
        document.write('<br />');
    }
}

numberOneTriangle(4)
numberOneTriangle(2)