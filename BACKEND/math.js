const student = {
    sravan: {
        marks: 93,
        class: "cse-c",
        getgrade() {
            console.log("a grade");
        }
    },
    dhanush: {
        marks: 92,
        class: "cse-b"
    }
};

// Export both `sum` and `student` in a single object
module.exports = {
    sum: function(a, b) {
        return a + b;
    },
    student: student
};
