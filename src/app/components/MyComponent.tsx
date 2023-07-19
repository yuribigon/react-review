import React, { SyntheticEvent } from "react";

interface MyState {
    name: string;
    email: string;
}

export default class MyComponent extends React.Component<any, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            email: "",
        };
    }

    handleChangeNome(novoNome: string) {
        this.setState((anterior) => {
            return { ...anterior, name: novoNome };
        });
    }

    handleSubmit(event: SyntheticEvent) {
        // Usado para prevenir o comportamento default dos browsers
        event.preventDefault();
        console.log("O formulário será submetido");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Digite seu nome: </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) =>
                            this.handleChangeNome(event.target.value)
                        }
                    />
                    <br />

                    { /* Usando o onSubmit do form */}
                    <input type="submit" value="Enviar" />
                    
                    { /* Usando o onClick de um botão */}
                    <button type="button" onClick={this.handleSubmit}>
                        Submeter
                    </button>
                </form>
            </div>
        );
    }
}
