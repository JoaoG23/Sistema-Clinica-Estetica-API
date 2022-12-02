import { QueryTypes } from "sequelize";
import { db } from "../../../../model/database";
class ListaTodosDadosAgendamentos {
  public static async execulte(): Promise<object> {
    try {
      const datas = await db.query(
        `SELECT ag.id,
        ag.data,
        ag.horario,
        ag.id_cliente,
        cl.nome_cliente,
        ag.id_funcionario,
        fun.nome_funcionario,
        ag.id_tipo_servico,
        ser.nome_servico,
        ag.valor_pago,
        ag.observacoes
        FROM agendamentos ag
        LEFT JOIN clientes cl ON ag."id_cliente" = cl.id
        LEFT JOIN funcionarios fun ON ag."id_funcionario" = fun.id
        JOIN tiposservicos ser ON ag."id_tipo_servico" = ser.id`,
        {
          type: QueryTypes.SELECT,
        }
      );
      return datas.length > 0 ? datas : null;
    } catch (error) {
      return error;
    }
  }
}

export default ListaTodosDadosAgendamentos;
