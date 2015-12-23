// 1. Create XDR object: 
var xdr = new XDomainRequest(); 

// 2. Open connection with server using GET method:
xdr.open("get", "http://www.contoso.com/xdr.aspx");

// 3. Send string data to server:
xdr.send();