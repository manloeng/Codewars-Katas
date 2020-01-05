const RANKS = Object.freeze([-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8])
const MIN_RANK = RANKS[0]
const MAX_RANK = RANKS[RANKS.length -1]
const POINTS_PER_RANK = 100

class User {
    constructor() {
        this.rank = MIN_RANK
        this.progress = 0
    }

    incProgress(taskRank) {
        if (!RANKS.includes(taskRank)) throw new Error()
        if (this.rank === MAX_RANK) return

        const userPosition = RANKS.indexOf(this.rank)
        const taskPosition = RANKS.indexOf(taskRank)

        const points = calculatePoints(userPosition, taskPosition)
        const totalPoints = points + this.progress

        const rankIncrease = Math.floor(totalPoints / POINTS_PER_RANK)
        const newPosition = userPosition + rankIncrease
        this.rank = RANKS[newPosition]

        if (this.rank === MAX_RANK) {
            this.progress = 0
        } else {
            const updatedProgress = totalPoints % POINTS_PER_RANK
            this.progress = updatedProgress
        }
    }
}

const calculatePoints = (userPosition, taskPosition) => {
    const rankDifference = taskPosition - userPosition
    if (rankDifference === 0) return 3
    if (rankDifference === -1) return 1
    if (rankDifference <= -2) return 0
    return 10 * rankDifference * rankDifference
}

const user = new User()

module.exports = user;
