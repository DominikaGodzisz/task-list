{
    const tasks = [
        {
            content: "obronić magisterkę",
            done: false,

        },
        {
            content: "ukończyć kurs Frondent",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li>
                ${task.content}
                </li>` ;
             };

             document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}