class Message {
    constructor(content, type = 'info'){
        this.id = Message.generateId();
        this.content = content;
        this.type = type;
    }

    static generatedId = 0;
    static generateId() {
        let generatedId = this.generatedId;

        this.generatedId++;

        return generatedId;
    }

    isSuccess   = () => this.type === 'success';
    isWarning   = () => this.type === 'warning';
    isError     = () => this.type === 'error';
    isInfo      = () => this.type === 'info';
}

export default Message;