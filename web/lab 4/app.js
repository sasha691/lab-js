class MultiplicationTableTest {
    constructor() {
        this.taskElement = document.querySelector("#task")
        this.answerForm = document.querySelector("#answerForm")
        this.resultElement = document.querySelector("#result")
        this.scoreElement = document.querySelector("#score")
        this.nextTaskButton = document.querySelector("#nextTask")

        this.multiplicationTable = {
            1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            2: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
            3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
            4: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
            5: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            6: [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
            7: [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
            8: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
            9: [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
            10: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        }

        this.currentTask = null
        this.correctAnswer = null
        this.userScore = 0

        this.answerForm.addEventListener("submit", (e) => this.checkAnswer(e));
        this.nextTaskButton.addEventListener("click", () => this.generateRandomTask());

        this.generateRandomTask()
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    generateRandomOptions(correctAnswer) {
        const options = [correctAnswer]
        while (options.length < 4) {
            const randomOption = this.getRandomNumber(1, 100)
            if (!options.includes(randomOption) && randomOption !== correctAnswer) {
                options.push(randomOption)
            }
        }
        return this.shuffleArray(options)
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = this.getRandomNumber(0, i)
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    generateRandomTask() {
        const number1 = this.getRandomNumber(1, 10)
        const number2 = this.getRandomNumber(1, 10)
        this.currentTask = `${number1} x ${number2}`
        this.correctAnswer = number1 * number2
        this.taskElement.textContent = `Скільки буде ${this.currentTask}?`

        const options = this.generateRandomOptions(this.correctAnswer)
        for (let i = 1; i <= 4; i++) {
            const option = document.getElementById(`option${i}`)
            const label = document.getElementById(`label${i}`)
            option.value = options[i - 1]
            label.textContent = options[i - 1]
        }

        this.answerForm.style.display = "block"
        this.nextTaskButton.style.display = "none"
        this.resultElement.textContent = ""
    }

    checkAnswer(e) {
        e.preventDefault()
        const selectedAnswer = document.querySelector('input[name="answer"]:checked')
        if (selectedAnswer) {
            const userAnswer = parseInt(selectedAnswer.value)
            if (userAnswer === this.correctAnswer) {
                this.userScore++
                this.resultElement.textContent = "Правильно!"
            } else {
                this.resultElement.textContent = "Неправильно. Правильна відповідь: " + this.correctAnswer
            }
            this.scoreElement.textContent = `Загальний рахунок: ${this.userScore}`
            this.answerForm.style.display = "none"
            this.nextTaskButton.style.display = "inline-block"
        }
    }
}

new MultiplicationTableTest();
