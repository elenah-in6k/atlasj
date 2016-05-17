<%@ page import="core.entity.BodySystem" %>
<%@ page import="java.util.List" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Body Systems</title>
</head>
<body>
<center>
    <h2>Body Systems </h2>
    <h2>
        <table border="1px inset black">
            <%
                List<BodySystem> bodySystems = (List<BodySystem>) request.getAttribute("list");
                    for (BodySystem bodySystem : bodySystems) {
            %>
            <tr>
                <td><%=bodySystem.getName()%></td>

            </tr>
            <% } %>
        </table>
    </h2>
</center>
</body>
</html>