interface BridPayload {
  [key: string]: any
}

export default class Brid implements BridPayload {
  static mid: any = null
  public static readonly use = (mid: string) => {
    Brid.mid = mid
    return Brid
  }
}