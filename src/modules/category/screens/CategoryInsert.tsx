import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Loading from '../../../shared/components/loading/Loading';
import Screen from '../../../shared/screen/Screen';
import { Display } from '../../../shared/styles/display.styles';
import { LimitedContainer } from '../../../shared/styles/limited.styles';
import { useInsertCategory } from '../hooks/useInsertCategory';
import { CategoryRoutesEnum } from '../routes';

const CategoryInsert = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { category, setCategory, loading, disabledButton, handleSubmit, loadingCategory, isEdit } =
    useInsertCategory(categoryId);
  const navigate = useNavigate();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'Home',
          navigateTo: '/',
        },
        {
          name: 'Categorias',
          navigateTo: CategoryRoutesEnum.CATEGORY,
        },
        {
          name: isEdit ? 'Editar Categoria' : 'Inserir Categoria',
        },
      ]}
    >
      {loadingCategory ? (
        <Display type="flex" justify="center">
          <Loading size="large" />
        </Display>
      ) : (
        <Display type="flex" justify="center" width="100%">
          <LimitedContainer width={400}>
            <Input
              margin="0 0 15px"
              title="Nome"
              placeholder="Nome"
              value={category.name}
              onChange={(e) => setCategory({ ...category, name: e.target.value })}
            />
            <Display type="flex" justify="right">
              <LimitedContainer width={120} margin="0 10px 0">
                <Button danger onClick={() => navigate(CategoryRoutesEnum.CATEGORY)}>
                  Cancelar
                </Button>
              </LimitedContainer>
              <LimitedContainer width={120}>
                <Button
                  loading={loading}
                  disabled={disabledButton}
                  type="primary"
                  onClick={handleSubmit}
                >
                  {isEdit ? 'Salvar' : 'Inserir'}
                </Button>
              </LimitedContainer>
            </Display>
          </LimitedContainer>
        </Display>
      )}
    </Screen>
  );
};

export default CategoryInsert;
