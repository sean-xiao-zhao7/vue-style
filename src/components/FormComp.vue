<script>
export default {
    data() {
        return {
            name: "",
            age: "",
            hear: "",
            interest: [],
            learn: null,
            term: false,
        };
    },
    methods: {
        submitHandler(event) {
            const postEnd = import.meta.env.VITE_POSTEND;
            const url = postEnd + "formStudent.json";
            const data = {
                name: this.name,
                age: this.age,
                hear: this.hear,
                interest: this.interest,
                learn: this.learn,
                term: this.term,
            };
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        },
    },
};
</script>

<template>
    <form @submit.prevent="submitHandler">
        <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Name"
            name="name"
        />
        <input
            type="number"
            id="age"
            v-model.number="age"
            placeholder="Age"
            name="age"
        />
        <label for="hear">How did you hear about us?</label>
        <select id="hear" name="hear" v-model="hear">
            <option value="wordofmouth">Word of mouth</option>
            <option value="internet">Internet</option>
            <option value="indeed">Indeed</option>
            <option value="jobfair">Job fair</option>
            <option value="friend">From a friend</option>
        </select>
        <label for="interest">Tell us your interest(s)</label>
        <div>
            <input
                type="checkbox"
                name="interest1"
                v-model="interest"
                value="it"
            />
            <label for="interest1">I.T.</label>
        </div>
        <div>
            <input
                type="checkbox"
                name="interest2"
                v-model="interest"
                value="javascript"
            />
            <label for="interest2">JavaScript</label>
        </div>
        <div>
            <input
                type="checkbox"
                name="interest3"
                v-model="interest"
                value="cloud"
            />
            <label for="interest3">Cloud computing</label>
        </div>
        <div>
            <input
                type="checkbox"
                name="interest4"
                v-model="interest"
                value="bigdata"
            />
            <label for="interest4">Big Data</label>
        </div>
        <label for="learn">What would you like to learn?</label>
        <div>
            <input
                type="radio"
                name="learn1"
                value="javascript"
                v-model="learn"
            />
            <label for="learn1">JavaScript</label>
        </div>
        <div>
            <input type="radio" name="learn2" value="CSS" v-model="learn" />
            <label for="learn1">CSS</label>
        </div>
        <div>
            <input type="radio" name="learn3" value="HTML5" v-model="learn" />
            <label for="learn1">HTML5</label>
        </div>
        <div>
            <input type="radio" name="learn4" value="PWA" v-model="learn" />
            <label for="learn1">PWA</label>
        </div>
        <div>
            <input type="radio" name="learn5" value="AWS" v-model="learn" />
            <label for="learn1">AWS</label>
        </div>
        <hr />
        <div>
            <input type="checkbox" name="term" v-model="term" />
            <label for="term"
                >By submitting, you agree with the terms of service.</label
            >
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<style scoped>
form {
    display: grid;
    grid-row-gap: 0.5rem;
}
</style>
