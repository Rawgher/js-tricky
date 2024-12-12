function curriedAdd(total) {
    const next = (num) => {
        if (num === undefined) {
            return total;
        }

        return curriedAdd(total + num);
    }

    if (total === undefined) {
        return 0;
    }

    return next;
}

module.exports = { curriedAdd };
