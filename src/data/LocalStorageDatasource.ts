export class LocalStorageDatasource {
  // note: melhoria poderia ser feita fazendo uma camada a mais de serialização
  get(key: string): any {
    return JSON.parse(window.localStorage.getItem(key) ?? "{}");
  }

  set(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
