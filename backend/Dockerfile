FROM microsoft/dotnet:2.1-sdk
ADD src /src/
ADD *.csproj /src/
ADD *.json /src/
WORKDIR /src

RUN dotnet publish -o ./publish

CMD ["dotnet", "publish/backend.dll"]