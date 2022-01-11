export default function Model(data, message) {

    var view = 
                "<form className='' onSubmit={submitRequest}>\n" + 
                    data +
                "   <button>" + message + "</button>\n" +
                "</form>\n";

    return view;
}