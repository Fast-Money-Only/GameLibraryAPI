FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

COPY ["GameLibraryAPI.sln", "."]
COPY ["Business/Business.csproj", "Business/"]
RUN dotnet restore "Business/Business.csproj"

COPY . .
WORKDIR "/src/Business"
RUN dotnet build "Business.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Business.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Business.dll"]
